import { useState, createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [candidates, setCandidates] = useState([])

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                candidates,
                setCandidates
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
