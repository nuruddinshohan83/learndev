import React, { useState, useEffect } from "react"
import firebase from "../../firebase/config"
import { useHistory } from "react-router-dom"
import "./style.css"

export default function SignUp() {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [error, setError] = useState("")

    useEffect(() => {}, [])
    let history = useHistory()

    function signup() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
                history.push("/profile")
            })
            .catch((err) => {
                console.log(err)
                setError(err.message)
            })
    }
    return (
        <div className="container">
            <div className="">
                <div className="form ">
                    <h2>Sign up</h2>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} />
                    <label>password</label>

                    <input
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button onClick={signup}>Sign up</button>
                    <p>
                        Already had an account ? <a href="#">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
