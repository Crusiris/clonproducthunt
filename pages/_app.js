import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';

const Myapp = props => {
    const { Component, pageProps } = props;

    return (
        <FirebaseContext.Provider
            value={{
                firebase
            }}
        >
            <Component {...pageProps}/>
        </FirebaseContext.Provider>
    )
}

export default Myapp;