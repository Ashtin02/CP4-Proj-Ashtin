import { GithubAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import "../CSS/Home.css"
import { database, firebaseApp } from '../firebase'
import { ref, set, get } from 'firebase/database';

//component that holds the github pop up sign in used in login page
const LoginC = () => {

    const [owner, setOwner] = useState(null);
    const [uid, setUid] = useState(null);

    const auth = getAuth(firebaseApp)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                authHandler({ user });
            }
        })
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const storedUid = localStorage.getItem("uid");
        if (storedUid) {
            authHandler({ user: { uid: storedUid } })
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                authHandler({ user })
            }
        });
        return () => unsubscribe();
    }, [])

    const logout = async () => {
        console.log("Logging Out");
        await signOut(auth);
        localStorage.removeItem("uid");
        setUid(null);
    }


    const authHandler = async (data) => {
        const productRef = ref(database, "products");
        const snapShot = await get(productRef)
        const products = snapShot.val() || {};

        if (!products.owner) {
            await set(ref(database, "products/owner"), data.user.uid)
        }

        localStorage.setItem("uid", data.user.uid);

        setUid(data.user.uid);
        setOwner(products.owner || data.user.uid);
    }

    const authenticate = () => {
        let provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .catch((error) => console.error("Error during Authentication: ", error));
    }
    
    if (!uid) { 
    return (
        <div className="Login">
            <h2>
                Please Login to Access The Phone Booth Site.
            </h2>

            <button className="GitHubLogin" onClick={authenticate}>
                Login With Github
            </button>
        </div>
        )
    }

    if (uid !== owner) {
        return (
            <div className="Login">
                <p>You are not the owner, please logout.</p>
                <button onClick={logout}>Log Out</button>
            </div>
        )
    }

    return (
        <div className="Login">
            <p>Welcome to The Phone Booth!</p>
            <button onClick={logout}>Log Out</button>
        </div>
    )

}
export default LoginC
