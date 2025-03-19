import React from "react";
import "../styles/AddPatient.css";

function AddPatientForm({ patientData, handleChange, handleSubmit, errors }) {
  return (
    <div className="form-container">
      <h2>Ajouter un patient</h2>
      <form onSubmit={handleSubmit}>
        {/* Nom et Prénom */}
        <div className="form-row">
          <div className="form-group">
            <label>Prénom:</label>
            <input
              type="text"
              name="firstName"
              value={patientData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Nom:</label>
            <input
              type="text"
              name="lastName"
              value={patientData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>
        </div>

        {/* Sexe, État civil, Numéro de sécurité sociale */}
        <div className="form-row">
          <div className="form-group">
            <label>Sexe:</label>
            <select
              name="gender"
              value={patientData.gender}
              onChange={handleChange}
            >
              <option value="">Sélectionner</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>

          <div className="form-group">
            <label>État civil:</label>
            <select
              name="maritalStatus"
              value={patientData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Sélectionner</option>
              <option value="Célibataire">Célibataire</option>
              <option value="Marié(e)">Marié(e)</option>
            </select>
            {errors.maritalStatus && (
              <span className="error">{errors.maritalStatus}</span>
            )}
          </div>

          <div className="form-group">
            <label>Numéro de sécurité sociale:</label>
            <input
              type="text"
              name="socialSecurityNumber"
              value={patientData.socialSecurityNumber}
              onChange={handleChange}
            />
            {errors.socialSecurityNumber && (
              <span className="error">{errors.socialSecurityNumber}</span>
            )}
          </div>
        </div>

        {/* Date de naissance, Ville de naissance, Pays de naissance */}
        <div className="form-row">
          <div className="form-group">
            <label>Date de naissance:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={patientData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && (
              <span className="error">{errors.dateOfBirth}</span>
            )}
          </div>

          <div className="form-group">
            <label>Ville de naissance:</label>
            <input
              type="text"
              name="placeOfBirth"
              value={patientData.placeOfBirth}
              onChange={handleChange}
            />
            {errors.placeOfBirth && (
              <span className="error">{errors.placeOfBirth}</span>
            )}
          </div>

          <div className="form-group">
            <label>Pays de naissance:</label>
            <input
              type="text"
              name="countryOfBirth"
              value={patientData.countryOfBirth}
              onChange={handleChange}
            />
            {errors.countryOfBirth && (
              <span className="error">{errors.countryOfBirth}</span>
            )}
          </div>
        </div>

        {/* Contact d'urgence */}
        <div className="form-row">
          <div className="form-group">
            <label>Nom du contact d'urgence:</label>
            <input
              type="text"
              name="emergencyContactName"
              value={patientData.emergencyContactName}
              onChange={handleChange}
            />
            {errors.emergencyContactName && (
              <span className="error">{errors.emergencyContactName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Relation:</label>
            <input
              type="text"
              name="emergencyContactRelation"
              value={patientData.emergencyContactRelation}
              onChange={handleChange}
            />
            {errors.emergencyContactRelation && (
              <span className="error">{errors.emergencyContactRelation}</span>
            )}
          </div>

          <div className="form-group">
            <label>Numéro du contact d'urgence:</label>
            <input
              type="text"
              name="emergencyContactPhone"
              value={patientData.emergencyContactPhone}
              onChange={handleChange}
            />
            {errors.emergencyContactPhone && (
              <span className="error">{errors.emergencyContactPhone}</span>
            )}
          </div>
        </div>

        <button className="submit-button" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddPatientForm;
