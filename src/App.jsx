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
import Success from "./pages/success";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="DevelopersList" element={<DevelopersList />} />
            <Route path="DeveloperForm" element={<DeveloperForm />} />
            <Route path="JobsList" element={<JobsList />} />
            {/*<Route path="success" element={<Success />} />*/}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}