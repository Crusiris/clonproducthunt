import React from 'react';
import styled from '@emotion/styled';

const Parraf = styled.p`
    text-align:center;
    font-weight: bold;
    margin-top:8rem;
`;

const  Nocoincidence = () => {
    return (
        <div className="list-products">
            <div className="container">
                    
                <Parraf> No hay conincidencias para esta busqueda </Parraf> 
                    
            </div>
        </div>
      
    );
}

export default  Nocoincidence;