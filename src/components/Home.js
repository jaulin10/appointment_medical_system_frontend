import React, { useEffect, useState } from "react";

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/events")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des événements");
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Page d'Accueil</h1>

      {loading && <p>Chargement des événements...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event.id}>
              <strong>{event.name}</strong> - {event.date}
              <br />
              <button onClick={() => alert(`Détails de ${event.name}`)}>
                Voir Détails
              </button>
            </li>
          ))
        ) : (
          <p>Aucun événement disponible</p>
        )}
      </ul>
    </div>
  );
}

export default Home;
