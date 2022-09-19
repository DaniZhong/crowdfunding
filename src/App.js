import React from "react";
import { BrowserRouter as Router, Routes, Route } from"react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectForm from "./pages/ProjectPage";
import LoginForm from "./components/Form/LoginForm";
import RegistrationForm from "./components/Form/RegistrationForm";
import NewProjectForm from "./components/Form/NewProjectForm";
import NewPledgeForm from "./components/Form/NewPledgeForm";



function App() {
  return (
    <Router>  
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/project/:id" element={<ProjectForm />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/signup" element={<RegistrationForm />}/>
          <Route path="/createProject" element={<NewProjectForm />}/>
          <Route path="/pledge/:id" element={<NewPledgeForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
