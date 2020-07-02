import React from 'react';
import Layout from '../components/layout/Layout';
import { Form, Campo, Submit, TitleForm } from '../components/ui/Form';


const CreateAccount = () => {
    //TODO LO QUE ESTE POR FUERA DEL MAIN, PERO DENTRO DEL RETURN SE MOSTRARA EN TODOS LOS COMPONENTES
    return (
        <div>
            <Layout>
            <>
             <TitleForm>Crear cuenta</TitleForm>
             <Form>
                 <Campo>
                     <label htmlFor="name">Nombre</label>
                     <input
                         type="text"
                         id="name"
                         name="name"
                         placeholder="Tu nombre"
                     />
                 </Campo>

                 <Campo>
                     <label htmlFor="email">Nombre</label>
                     <input
                         type="email"
                         id="email"
                         name="email"
                         placeholder="Tu Email"
                     />
                 </Campo>

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