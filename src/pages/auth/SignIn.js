import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import firebase from "../../firebase/config"
import "./style.css"
export default function SignIn() {
    let history = useHistory()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

    function signin() {
        console.log(email)
        console.log(pass)

        firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                history.push("/")
            })
            .catch((err) => {
                //console.log(err)
                setError(err.message)
            })
    }
    return (
        <div className="container">
            <div className="">
                <div className="form ">
                    <h2>Sign In</h2>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} />
                    <label>password</label>

                    <input
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button onClick={signin}>Sign in</button>
                    <p>
                        Don't have any account? <a href="#">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
