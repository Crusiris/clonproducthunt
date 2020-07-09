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
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            {user && <Link href="/nuevoproducto">Nuevo Producto</Link> }
            
        </Navbar>
    );
}

export default Nav;