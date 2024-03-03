/**Function to validate the mandatory fields ensuring any is empty*/
export function validateMandatoryInformation(eventObject) {
    console.log("Validation");
    let isEmpty=false;
        //Object convierte a arreglo el objeto y .entries me ayuda a regresar [key, value] del Map
        const mandatoryInformation = Object.entries(eventObject); 
        for (let [key, infoValue] of mandatoryInformation) {
            if (!infoValue) { //Revisando si viene nulo o undefined por default
                isEmpty=true
            } 
        }
        console.log(isEmpty);
        return isEmpty
    }

