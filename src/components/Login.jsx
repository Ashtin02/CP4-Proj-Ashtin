import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import React from 'react'
import "../CSS/Home.css"
import { firebaseApp } from '../firebase'

//component that holds the github pop up sign in used in login page
const LoginC = () => {

    const auth = getAuth(firebaseApp)

    const authenticate = () => {
        let provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .catch((error) => console.error("Error during Authentication: ", error));
    }
    

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
export default LoginC
