import axios from "axios";


const EVENT_BASE_REST_API_URL = "http://localhost:8080/api/v1/events/";
const ADD_NEW_EVENT = "http://localhost:8080/api/v1/events/addEvent"

class EventService{
    getAllEvents(){
        return axios.get(EVENT_BASE_REST_API_URL);
    }

    addEvent(event){
        return axios.post(ADD_NEW_EVENT, event);
    }

}
export default new EventService;