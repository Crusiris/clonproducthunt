import React from 'react';
import styled from '@emotion/styled';
//Components
import Link from 'next/link';
import Search from '../ui/Search';
import Nav from '../layout/Nav';
import Button from '../ui/Button';

//Style components
const ContenHeader= styled.div`
    max-width:1200px;
    width:95%;
    margin: 0 auto;
    @media(min-width:768px) {
        display:flex;
        justify-content:space-between;
    }
`;
const Logo = styled.p`
    color: var(--orange);
    font-size:4rem;
    line-height:0;
    font-weight:700;
    font-family:'Roboto Slab', serif;
    margin-right:2rem;
`;

const NameUser = styled.p`
    margin-right:2rem;
`;

const ContainerHeader = styled.div`
  border-bottom:2px solid var(--greythree);
  padding:1rem 0;
`;

const SubHeader = styled.div`
    display:flex;
    align-items:center;
`;

const Header = () => {
    const user = true;
    return (
        <ContainerHeader>

            <ContenHeader>

                <SubHeader>
                    <Link href="/">
                     <Logo>P</Logo>
                    </Link>
                    
                    <Search/>
                    <Nav/>
                </SubHeader>
                <SubHeader>

                    {user ?
                       ( <>
                         <NameUser>Hola: Crusiris</NameUser>
                         <Button type="button" bgColor="true">Cerrar sesion</Button>
                        </>)
                        :
                        (<>
                            <Link href="/login">
                                <Button bgColor="true">Login</Button> 
                            </Link>

                            <Link href="/crear-cuenta">
                                <Button>Crear Cuenta</Button>
                            </Link>
                        </>)
                    }

                </SubHeader>

            </ContenHeader>

        </ContainerHeader>
    );
}

export default Header;