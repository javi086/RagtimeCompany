/**Function to validate the mandatory fields ensuring any is empty*/
 export function validateMandatoryInformation(eventObject) {
    console.log("Validation");
    const mandatoryInformation = Object.entries(eventObject); //Object convierte a arreglo el objeto y .entries me ayuda a regresar [key, value] del Map
    const isEmpty = new Map();
    for(const [element, value]  of  mandatoryInformation){
        console.log(element, value);
        if(value != null){ //Si esta vacio
            isEmpty.set(element, true);
        }else{
            isEmpty.set(element, false);
        }
    }
    return isEmpty
    
}
