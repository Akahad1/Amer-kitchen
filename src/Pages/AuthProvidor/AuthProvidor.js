import React from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { createContext } from 'react';
import app from '../../fairebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


const provider = new GoogleAuthProvider();
const auth =getAuth(app)
export const AuthContext =createContext()
const AuthProvidor = ({children}) => {
    const [user,setUser]=useState()
    const [looder,setLooder]=useState(true)

    // createUser
    const createUser =(email, password)=>{
        setLooder(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // signin
    const logIn =(email,password)=>{
        setLooder(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // signIn withGoogle
    const googleLogin=()=>{
        return signInWithPopup(auth, provider)

    }


    // logOut
    const logOut=()=>{
        return signOut(auth)

    }

    // chageuser
    useEffect(()=>{
        const unSubcariber =onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
    
            setUser(currentUser)
            setLooder(false)

        } )
        return ()=>unSubcariber
    },[])


    const authInfo={
        user,
        createUser,
        logIn,
        logOut,
        googleLogin,
        looder,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvidor;