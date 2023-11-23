import React from "react";
import { useState, useEffect } from "react";

function useEmptyInputStyle(userInfo){
    const [emptyInputs, setEmptyInputs] = useState([]);

    useEffect(() => {
        
        let emptyInputKeys = Object.keys(userInfo);
       emptyInputKeys.forEach(function (key) {
         if(userInfo[key] == '')
         emptyInputKeys = userInfo[key];
       });
        setEmptyInputs(emptyInputKeys);
      }, [userInfo]);

      

    return emptyInputs;
};

export default useEmptyInputStyle;