//MASTER PAGES
import React from 'react';
import Link from 'next/link';
import Header from '../layout/Header';

const Layout = (props) => {
    //TODO LO QUE ESTE POR FUERA DEL MAIN, PERO DENTRO DEL RETURN SE MOSTRARA EN TODOS LOS COMPONENTES
    return (
        <>
            <Header/>

            <main>

                {props.children}

            </main>
        </>
    );
}

export default Layout;