
const API_URL = "http://localhost:3000/events";

const getAllEvents = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      console.error(error);
    });
};

const getEventById = (id) => {
  return fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

const createEvent = (event) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event)
  });
};

const deleteEvent = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
};

//----- EJEMPLO DE LLAMADAS A LAS DIFERENTES FUNCIONES, 
//----- DONDE VA CONSOLE LOG SE PUEDEN HACER COMPROBACIONES DE STATUS ETC (si se quiere)
// getAllEvents().then(result => console.log("result inside", result));
// getEventById(2).then(result => console.log("event id 2", result));
// createEvent({nombre:"nombre 3"}).then(result => console.log("RESULT POST", result));
// deleteEvent(5).then(result => console.log("RESULT DELETE", result));

export { getAllEvents, getEventById, createEvent, deleteEvent };
