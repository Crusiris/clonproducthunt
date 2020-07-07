import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Form, Campo, Submit, TitleForm, Error } from '../components/ui/Form';

//Validación
import useValidation from '../hooks/useValidation';
import validationLogin from '../validation/validationLogin';

//Firebase
import firebase from '../firebase';

const state_initial ={
    email:'',
    password:''
}

const Login = () => {
    //TODO LO QUE ESTE POR FUERA DEL MAIN, PERO DENTRO DEL RETURN SE MOSTRARA EN TODOS LOS COMPONENTES
    const { values, error, handleChange, handleBlur, handleSubmit } = useValidation(state_initial, validationLogin, logIn)
    //Extrayendo valores del state values
    const { email, password } = values
  
    //State local
    const [ errorfire , seterrorFire ] = useState(false);
  
        async function logIn() {
            try {
                const user= await firebase.singIn(email, password);
                console.log(user);
                Router.push('/');
            } catch (error) {
                console.log('Ocurrio un error', error.message);
                //Guardando error en el state local de errores
                seterrorFire(error.message);
            }
        }
      //TODO LO QUE ESTE POR FUERA DEL MAIN, PERO DENTRO DEL RETURN SE MOSTRARA EN TODOS LOS COMPONENTES
      return (
          <div>
              <Layout>
              <>
               <TitleForm>Iniciar sesion</TitleForm>
               <Form
               onSubmit={handleSubmit} noValidate
               >
        
                   <Campo>
                       <label htmlFor="email">Email</label>
                       <input
                           type="email"
                           id="email"
                           name="email"
                           placeholder="Tu Email"
                           value={email}
                           onChange={handleChange}
                           onBlur={handleBlur}
                       />
                   </Campo>
                   {error.email && <Error>{error.email}</Error>}
  
                   <Campo>
                       <label htmlFor="password">Password</label>
                       <input
                           type="password"
                           id="password"
                           name="password"
                           placeholder="Tu password"
                           value={password}
                           onChange={handleChange}
                           onBlur={handleBlur}
                       />
                   </Campo>
                   {error.password && <Error>{error.password}</Error>}
                   {errorfire && <Error>{ errorfire }</Error>}
                   <Submit
                       type="submit"
                       value="Iniciar sesion"
                   />
               </Form>
              </>
              
              </Layout>
          </div>
      );
}

export default Login;