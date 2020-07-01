import React from 'react';
import Link from 'next/link';
import Search from '../ui/Search';
import Nav from '../layout/Nav';

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>
                    <Search/>
                    <Nav/>
                </div>
                <div>
                    <p>Hola: Crusiris</p>
                    <button type="button">Cerrar sesion</button>
                    <Link href="/">Login</Link>
                    <Link href="/">Crear Cuenta</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;