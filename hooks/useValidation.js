import React, { useState, useEffect } from 'react';

//Hooks Personalizado para manejar los formularios de la app
const useValidation = (stateInitial, validate, fn) => {
    
    const [values, setValues] = useState(stateInitial);//State para manejar los valores del formulario.
    const [error, setError ] = useState({});//State para manejar los errores del formulario.
    const [submitform, setSubmitform] = useState(false); //State que maneja el valor del submit
    
    useEffect(()=> {
        //Si submitform es true, entonces verificamos que no existan errores
        if(submitform){
            const notError = Object.keys(error).length === 0;

            //Si no hay errores, llamamos a la función que se vaya a ejecutar
            if(notError){
                fn();
            }
            setSubmitform(false);
        }

    },[error]);

    //Funcion que obtiene datos de input
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    //Funcion con handleBlur
    const handleBlur = () => {
        //pasando los valores que introduce el usuario a la funcion validar [validatecreateaccount]
        const errorValidation = validate(values);
        //guardando los errores encontrado es el state de errores
        setError(errorValidation);
    }

    //Enviando datos
    const handleSubmit = e => {
        e.preventDefault();
        //pasando los valores que introduce el usuario a la funcion validar [validatecreateaccount]
        const errorValidation = validate(values);
        //guardando los errores encontrado es el state de errores
        setError(errorValidation);
        setSubmitform(true);
    }

    return{
        values,
        error,
        submitform,
        handleChange,
        handleBlur,
        handleSubmit
    };
}

export default useValidation;