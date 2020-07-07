//Archivo que contiene la clase con los metodos de firebase
import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    }

    //Registro
   async singUp(name, email, password){
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    
        return await newUser.user.updateProfile({
            displayName:name
        })
    }

    //Inicio de sesion
    async singIn(email, password){
       return this.auth.signInWithEmailAndPassword(email, password);
    }


}

const firebase = new Firebase();
export default firebase;