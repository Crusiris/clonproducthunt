import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

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
    return (
        <Navbar>
            <Link href="/">Inicio</Link>
            <Link href="/">Populares</Link>
            <Link href="/">Nuevo Producto</Link>
        </Navbar>
    );
}

export default Nav;