export async function getEvents() {
  try {
    const response = await fetch("http://localhost:8080/api/events");
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Problème de récupération des événements");
    }
  } catch (error) {
    console.error(error);
  }
}
