import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
//Guardando el usuario que inicio sesion
function userAuth() {
    const [ userauthen, setUserauthen ] = useState(null);

    useEffect(()=>{
        const unsuscribe = firebase.auth.onAuthStateChanged( user => {
            if( user ){
                setUserauthen(user);
            }else{
                setUserauthen(null);
            }
        });
        return ()=> unsuscribe();
    }, []);

    return userauthen;
}

export default userAuth;