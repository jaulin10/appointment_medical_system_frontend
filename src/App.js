import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"; // À créer plus tard pour la page de connexion
import AddPatient from "./components/AddPatient"; // Assurez-vous que ce chemin est correct
import ListPatients from "./components/ListPatients"; // Assurez-vous que ce chemin est correct
import EditPatient from "./components/EditPatient"; // Assurez-vous que ce chemin est correct
import Navbar from "./components/Navbar"; // Importer le composant Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Inclure la barre de navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Login />} />
        <Route path="/list" element={<ListPatients />} />
        <Route path="/add" element={<AddPatient />} />
        <Route path="/edit/:id" element={<EditPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
