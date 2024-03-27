/**PENDIENTE Y NO ES FUNCIONAL AÚN


import React, { useReducer, useState} from "react";
import { info } from "sass";



function useMessagesHandler() {
    const messageType = (message, setTypeOfError) => {
        
        switch (setTypeOfError.type){
            case 'FormError':
                return {type: 'Form completed successfully', message: setTypeOfError.menssage};

            case 'FormSucess':
                return {type: 'Incorrect fomr', menssage: setTypeOfError.menssage};

                default:
                    return message;

        }
    };
    
    return{
        messageType
    };


}

export default useMessagesHandler;

****/