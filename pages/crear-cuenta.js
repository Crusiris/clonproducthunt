import React from 'react';
import Layout from '../components/layout/Layout';
import { Form, Campo, Submit, TitleForm, Error } from '../components/ui/Form';

//Validación
import useValidation from '../hooks/useValidation';
import validationCreateAccount from '../validation/validationCreateAccount';

//Firebase
import firebase from '../firebase';

const state_initial ={
    name:'',
    email:'',
    password:''
}
const CreateAccount = () => {
  const { values, error, handleChange, handleBlur, handleSubmit } = useValidation(state_initial, validationCreateAccount, createCta)
    
  //Extrayendo valores del state values
    const {name, email, password } = values

   async function createCta() {
      try {
          await  firebase.singIn(name, email, password);
      } catch (error) {
          console.log('Ocurrio un error', error);
      }
   }
    //TODO LO QUE ESTE POR FUERA DEL MAIN, PERO DENTRO DEL RETURN SE MOSTRARA EN TODOS LOS COMPONENTES
    return (
        <div>
            <Layout>
            <>
             <TitleForm>Crear cuenta</TitleForm>
             <Form
             onSubmit={handleSubmit} noValidate
             >
                 <Campo>
                     <label htmlFor="name">Nombre</label>
                     <input
                         type="text"
                         id="name"
                         name="name"
                         placeholder="Tu nombre"
                         value={name}
                         onChange={handleChange}
                         onBlur={handleBlur}
                     />
                 </Campo>
                    {error.name && <Error>{error.name}</Error>}
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
                 <Submit
                     type="submit"
                     value="Crear Cuenta"
                 />
             </Form>
            </>
            
            </Layout>
        </div>
    );
}

export default CreateAccount;