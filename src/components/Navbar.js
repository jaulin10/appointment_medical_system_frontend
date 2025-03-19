import React from "react";
import "../styles/Navbar.css"; // Importer le fichier CSS
import { Link } from "react-router-dom"; // Importer Link pour la navigation

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">🏠 Home</Link> {/* Lien vers la page d'accueil */}
        </li>
        <li>
          <Link to="/add">Patient Management</Link>{" "}
          {/* Lien vers la page d'ajout de patient */}
        </li>
        <li>
          <Link to="/list">List of Patients</Link>{" "}
          {/* Lien vers la page des patients */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
