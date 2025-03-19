import React, { useEffect, useState } from "react";

function EditPatient({ match }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const patientId = match.params.id; // Récupérer l'ID du patient depuis l'URL
    fetch(`http://localhost:8080/api/patients/${patientId}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setAge(data.age);
        setAddress(data.address);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération du patient:", error)
      );
  }, [match.params.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedPatient = { name, age, address };

    try {
      const response = await fetch(
        `http://localhost:8080/api/patients/${match.params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPatient),
        }
      );
      const result = await response.json();
      console.log("Patient modifié:", result);
    } catch (error) {
      console.error("Erreur lors de la modification du patient:", error);
    }
  };

  return (
    <div>
      <h2>Modifier le Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Âge:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <label>Adresse:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default EditPatient;
