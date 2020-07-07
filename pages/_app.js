import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import userAuth from '../hooks/userAuth';

const Myapp = props => {
    const user = userAuth();
    console.log(user);
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