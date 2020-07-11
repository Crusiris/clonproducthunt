import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FirebaseContext } from '../../firebase';

const Navbar = styled.nav`
    padding-left:2rem;

    a{
        font-size: 1.8rem;
        margin-left:2rem;
        color:var(--greytwo);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type{
            margin-right:0;
        }
    }
`;

const Nav = () => {
    const { user, firebase } = useContext(FirebaseContext);
    return (
        <Navbar>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/populares"><a>Populares</a></Link>
            {user && <Link href="/nuevoproducto"><a>Nuevo Producto</a></Link> }
            
        </Navbar>
    );
}

export default Nav;