import React from 'react';
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

const Form = styled.div`
    position:relative;
`;
const Search = () => {
    return (
        <Form>
            <InputText type="text"
                placeholder="Buscar Productos"
            />
            <BtnSubmit type="submit">Buscar</BtnSubmit>
        </Form>
    );
}

export default 
Search;