import React from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import DevelopersList from "./pages/DevelopersList";
import DeveloperForm from "./pages/DeveloperForm";
import JobsList from "./pages/JobsList";
import NoPage from "./pages/NoPage";

export default function App() {
  const [user, setUser] = React.useState(null)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home user={user} />} />
            <Route path="DevelopersList" element={<DevelopersList user={user} />} />
            <Route path="DeveloperForm" element={<DeveloperForm user={user} />} />
            <Route path="JobsList" element={<JobsList user={user} />} />
            <Route path="*" element={<NoPage user={user} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}