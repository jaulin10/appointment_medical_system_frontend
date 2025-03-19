import React, { useState } from "react";
import "../styles/AddPatient.css";
import AddPatientForm from "../Forms/AddPatientForm";

function AddPatient() {
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    countryOfBirth: "",
    gender: "",
    maritalStatus: "",
    socialSecurityNumber: "",
    phoneNumber: "",
    email: "",
    address: "",
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactPhone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    // Validation des champs
    if (!patientData.firstName.trim())
      newErrors.firstName = "Le prénom est requis.";
    if (!patientData.lastName.trim()) newErrors.lastName = "Le nom est requis.";
    if (!patientData.dateOfBirth)
      newErrors.dateOfBirth = "La date de naissance est requise.";
    if (!patientData.placeOfBirth.trim())
      newErrors.placeOfBirth = "La ville de naissance est requise.";
    if (!patientData.countryOfBirth.trim())
      newErrors.countryOfBirth = "Le pays de naissance est requis.";
    if (!patientData.gender) newErrors.gender = "Le sexe est requis.";
    if (!patientData.maritalStatus)
      newErrors.maritalStatus = "L'état civil est requis.";
    if (!patientData.address.trim())
      newErrors.address = "L'adresse est requise.";
    if (!patientData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientData.email)) {
      newErrors.email = "L'email n'est pas valide.";
    }
    if (!patientData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Le numéro de téléphone est requis.";
    } else if (!/^\d{10}$/.test(patientData.phoneNumber)) {
      newErrors.phoneNumber =
        "Le numéro de téléphone doit contenir 10 chiffres.";
    }
    if (!patientData.socialSecurityNumber.trim()) {
      newErrors.socialSecurityNumber =
        "Le numéro de sécurité sociale est requis.";
    } else if (!/^\d{9}$/.test(patientData.socialSecurityNumber)) {
      newErrors.socialSecurityNumber =
        "Le numéro de sécurité sociale doit contenir 9 chiffres.";
    }
    if (!patientData.emergencyContactName.trim())
      newErrors.emergencyContactName =
        "Le nom du contact d'urgence est requis.";
    if (!patientData.emergencyContactRelation.trim())
      newErrors.emergencyContactRelation = "La relation est requise.";
    if (!patientData.emergencyContactPhone.trim()) {
      newErrors.emergencyContactPhone =
        "Le numéro du contact d'urgence est requis.";
    } else if (!/^\d{10}$/.test(patientData.emergencyContactPhone)) {
      newErrors.emergencyContactPhone =
        "Le numéro du contact d'urgence doit contenir 10 chiffres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:8080/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
      });
      const result = await response.json();
      console.log("Patient ajouté:", result);
    } catch (error) {
      console.error("Erreur lors de l'ajout du patient:", error);
    }
  };

  return (
    <AddPatientForm
      patientData={patientData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
}

export default AddPatient;
