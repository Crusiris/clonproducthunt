import React, { useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

const InputText = styled.input`
    border:1px solid var(--greyThree);
    padding: 1rem;
    min-width:300px
`;

const BtnSubmit = styled.button`
   height:3rem;
   width:3rem;
   display:block;
   background-size:4rem;
   background-image:url('/static/img/search.png');
   background-repeat:no-repeat;
   position:absolute;
   right:1rem;
   top:1px;
   background-color:rgb(255,255,255);
   border:none;
   text-indent:-9999px;

   &:hover {
       cursor:pointer;
   }
`;

const Form = styled.form`
    position:relative;
`;
const Search = () => {

    const [search, setSearch]= useState('');

    const searchProductt = e => {
        e.preventDefault()
       
        //Validando que el campo no este vacio
        if(search.trim() === '') return;

        //Redireccionar a la pantalla de busqueda
        Router.push({
            pathname:'/buscar',
            query:{"q":search}
        })

        console.log('entro',search );
    }

    return (
        <Form
         onSubmit={searchProductt}
        >
            <InputText type="text"
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar Productos"
            />
            <BtnSubmit type="submit">Buscar</BtnSubmit>
        </Form>
    );
}

export default 
Search;