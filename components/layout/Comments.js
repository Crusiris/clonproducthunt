import React from 'react';
import styled from '@emotion/styled';

const ContainerComment = styled.ul`
    border:1px solid #e1e1e1;
    padding:2rem;
`;

const Author = styled.span`
    font-weight: bold;
    text-transform: capitalize;
`;

const Comments = ({comments}) => {
    return (
        <>
          {comments.length === 0 ? "Aun no hay comentarios":
            <ContainerComment>
                {comments.map((comment, i) =>(
                    <li key={`${comment.userid}-${i}`}>
                        <p>{comment.message}</p>
                        <p>Escrito por: <Author>{ comment.username} </Author></p>
                        
                    </li>
                ))}
            </ContainerComment>
          }
        </>
        
        
    );
}

export default Comments;