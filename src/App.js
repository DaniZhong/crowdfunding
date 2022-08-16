import React from "react";
import { BrowserRouter as Router, Routes, Route } from"react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>  
      <div>
        <Nav />

        <Routes>
          <Route path="/project/:id" element={<ProjectPage />}>
          </Route>
          <Route path="/login" element={<LoginPage />}>
          </Route>
          <Route path="/" element={<HomePage />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
