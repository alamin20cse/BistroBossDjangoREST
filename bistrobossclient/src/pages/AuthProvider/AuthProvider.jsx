import React, { useEffect, useState, createContext } from 'react';

import {
    createUserWithEmailAndPassword, // Corrected function name
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile as firebaseUpdateProfile, // Aliased to avoid conflicts
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser= async (email, password) => {
        setLoading(true);
        try {
            return await createUserWithEmailAndPassword(auth , email, password);
        } catch (error) {
            console.error("Error creating new user:", error);
        } finally {
            setLoading(false);
        }
    };

    const logOut = async () => {
        setLoading(true);
        try {
            return await signOut(auth);
        } catch (error) {
            console.error("Error logging out:", error);
        } finally {
            setLoading(false);
        }
    };

    const signIn= async (email, password) => {
        setLoading(true);
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error logging in:", error);
        } finally {
            setLoading(false);
        }
    };

   const updateUserProfile = async ({ displayName, photoURL }) => {
    try {
        await firebaseUpdateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL,
        });
        // Optional: Update local user state if needed
        setUser((prevUser) => ({
            ...prevUser,
            displayName,
            photoURL,
        }));
    } catch (error) {
        console.error("Error updating profile:", error);
    }
};


    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = async () => {
        try {
            return await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUserProfile, // Updated reference
        handleGoogleSignIn,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
