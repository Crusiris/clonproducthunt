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

const CreatorProduct = styled.p`
    padding:.1rem 5rem;
    border:1px solid #DA552F;
    color:#DA552F;
    font-weight:bold;
    display:inline-block;
    text-align:center;
`;

const Comments = ({comments, isCreator}) => {
    return (
        <>
          {comments.length === 0 ? "Aun no hay comentarios":
            <ContainerComment>
                {comments.map((comment, i) =>(
                    <li key={`${comment.userid}-${i}`}>
                        <p>{comment.message}</p>
                        <p>Escrito por: <Author>{ comment.username} </Author></p>
                        {isCreator(comment.userid) &&
                        <CreatorProduct>Creador</CreatorProduct>
                        }
                    </li>
                ))}
            </ContainerComment>
          }
        </>
        
        
    );
}

export default Comments;