import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from './Firebase.init';
export const dragonContext = createContext(null)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader,setloader] = useState(true)


    //  Register//

    const accountRegister = (email, password) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in user//
    const accountLogin = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // userChek //


    // logout setup //

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            console.log("Signout successful");
          }).catch((error) => {
             console.log(error.message);
          }); 
    }

    // update profile //

    const UpdateMyProfile = (updateData) =>{
       return updateProfile(auth.currentUser,updateData)
    }

    
    useEffect(() => {
        const unSubcsibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setloader(false)
        });
        return () => {
            unSubcsibe()
        }
    })

    useEffect(() =>{
         setloader(false)
    },[user])


    const dragonObject = {
        person: "Azmir",
        accountRegister,
        accountLogin,
        user,
        setUser,
        logOut,
        UpdateMyProfile,
        loader
    }
    return (
        <div>
            <dragonContext.Provider value={dragonObject}>
                {children}
            </dragonContext.Provider>
        </div>
    );
};

export default AuthContext;