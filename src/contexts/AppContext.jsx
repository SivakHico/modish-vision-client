import { useState, createContext, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [userProfile, setUserProfile] = useState(null)
    const [candidates, setCandidates] = useState([])
    useEffect(() => {
        // when the app starts, 
        // check if i have a token 
        // check my token with the server, to see 
        // if it is still valid, this means i am "logged in"

        const jwt = localStorage.getItem('token')
        if (jwt) {
            console.log('jwt', jwt)
            try {
                fetch(`${import.meta.env.VITE_API_URL}/users/check-token`, {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(jwt)}`,
                    },
                }).then((res) => res.json()).then((data) => {
                    if (data.user !== null) {
                        setUser(data.user);
                        setUserProfile(data.profile);
                        console.log(data)
                    } else {
                        console.log("you're not logged in")
                        setUser(null)
                    }
                })
                    .catch((err) => {
                        console.log("BBBBB");
                        console.log(err);
                    });
            } catch (err) {
                console.log("UHhhhhhhh", err)
            }
        }
    }, []);

    const handleLogout = () => {
        setUser(null)
        setUserProfile(null)
        localStorage.removeItem("token");
        setTimeout(() => window.location.reload(), 1000)
    };

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                candidates,
                setCandidates,
                handleLogout
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
