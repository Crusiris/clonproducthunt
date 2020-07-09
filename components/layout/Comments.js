import React from 'react';

const Comments = ({comments}) => {
    console.log(comments);
    return (
        <>
            {comments.map(comment =>(
                <li>
                    <p>{comments.name}</p>
                    <p>Escrito por: {comments.nameUser}</p>
                    <p>desde comentarios, un comentario</p>
                </li>
            ))}
        </>
        
        
    );
}

export default Comments;