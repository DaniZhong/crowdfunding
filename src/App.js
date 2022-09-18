import React from "react";
import { BrowserRouter as Router, Routes, Route } from"react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NewProjectPage from "./pages/NewProjectPage";
import NewPledgePage from "./pages/NewPledgePage";



function App() {
  return (
    <Router>  
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/project/:id" element={<ProjectPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<RegistrationPage />}/>
          <Route path="/createProject" element={<NewProjectPage />}/>
          <Route path="/pledge/:id" element={<NewPledgePage />}/>
          <Route path="/createPledge" element={<NewPledgePage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
