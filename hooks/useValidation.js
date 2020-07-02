import React, { useState, useEffect } from 'react';

const [state, setState] = useState([]);

const useValidation = (stateInitial, validate, fn)=>{
    
    const [value, setValue] = useState(stateInitial);
    const [error, setError ] = useState({});
    const [submitform, setSubmitform] = useState(false); 
    
    useEffect(()=> {

        if(submitform){
            const notError = Object.keys(error).length === 0;

            //Si no hay errores, llamamos a la función
            if(notError){
                fn();
            }
            setSubmitform(false);
        }
    },[]);

    //Funcion qu obtiene datos de input
    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }
    //Enviando datos
    const handleSubmit = e => {
        e.preventDefault();
        const errorValidation = validate(value);
        setError(errorValidation);
        setSubmitform(true);
    }

    return{
        value,
        error,
        submitform,
        handleChange,
        handleSubmit
    };
}

export default useValidation;