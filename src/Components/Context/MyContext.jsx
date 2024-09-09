import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const auth = getAuth(app)
export const AuthContext = createContext()

const MyContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    })
    const authInfo = {
        user,
        loader,
        createUser,
        logOut,
        signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default MyContext;