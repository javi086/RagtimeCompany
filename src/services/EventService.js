import axios from "axios";

//Este const podria ir en una carpeta separada o mas avanzado en la BD por temas de seguridad
const EVENT_BASE_REST_API_URL = "http://localhost:8080/api/v1/events";

class EventService{
    getAllEvents(){
        return axios.get(EVENT_BASE_REST_API_URL + '/');
    }

    addEvent(event){
        return axios.post(EVENT_BASE_REST_API_URL + '/addEvent', event);
    }

    getEventById(eventId){
        return axios.get(EVENT_BASE_REST_API_URL + '/getEventById/' + eventId);
    }

    getEventByName(eventName){
        return axios.get(EVENT_BASE_REST_API_URL + '/getEventByName?eventName=' +eventName)
    }

    updateEventById(eventId, eventUpdated){
        return axios.put(EVENT_BASE_REST_API_URL + '/updateEventById/'+ eventId, eventUpdated);
    }
    deleteEventById(eventId){
        return axios.delete(EVENT_BASE_REST_API_URL + '/deleteEventById/' + eventId);
    }



}
export default new EventService();