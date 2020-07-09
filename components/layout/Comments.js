import React from 'react';

const Comments = ({comments}) => {
    console.log(comments);
    return (
        <>
        <p>desde comentarios, un comentario</p>
            {comments.map(comment =>(
                <li>
                    <p>{comments.name}</p>
                    <p>Escrito por: {comments.nameUser}</p>
                    
                </li>
            ))}
        </>
        
        
    );
}

export default Comments;