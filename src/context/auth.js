import React, { Children, useState } from "react"
import { createContext } from "react"
import firebase from "../../firebase"

const AuthProvider = ({ Children }) => {
    const AuthContext = React.createContext()
    let [user, setUser] = useState(null)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [user])
    return <AuthContext.Provider>{Children}</AuthContext.Provider>
}

export default AuthProvider
