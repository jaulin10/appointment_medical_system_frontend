import React, { useEffect, useState } from "react";

function ListPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des patients:", error)
      );
  }, []);

  return (
    <div>
      <h2>Liste des Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age} ans - {patient.address}
            <button onClick={() => alert(`Modifier ${patient.name}`)}>
              Modifier
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPatients;
