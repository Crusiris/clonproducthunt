import React from 'react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
const Image = styled.img`
    width:200px;
`;

const Detailsproducts = ({product}) => {
    console.log(product);

    const {id, name, comments, votes, urlimage, url, business, create, description }=product;

    return (
        <li>
            <div>
                <div>
                    <Image src={urlimage}/>
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>

                    <div>
                        <img src="/static/img/comentario.png"/>
                        <p>{comments.length} Comentarios</p>
                    </div>
                    <p>Publicado hace: { formatDistanceToNow(new Date(create), {locale:es}) }</p>
                </div>
            </div>

            <div>
                <div>&#9650;</div>
                <p>{votes}</p>
            </div>
        </li>
    );
}

export default Detailsproducts;