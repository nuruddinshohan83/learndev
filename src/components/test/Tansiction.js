import firebase from "../../firebase/config"
import { useEffect, useState } from "react"
const Transiction = () => {
    const ref = firebase.firestore().collection("comments")
    const query = ref.where("postid", "==", "wRWzfNrefFMZFXq7XyUo")
    const [postData, setPostData] = useState([])
    return db
        .runTransaction((transaction) => {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get(sfDocRef).then((sfDoc) => {
                if (!sfDoc.exists) {
                    throw "Document does not exist!"
                }

                // Add one person to the city population.
                // Note: this could be done without a transaction
                //       by updating the population using FieldValue.increment()
                var newPopulation = sfDoc.data().population + 1
                transaction.update(sfDocRef, { population: newPopulation })
            })
        })
        .then(() => {
            console.log("Transaction successfully committed!")
        })
        .catch((error) => {
            console.log("Transaction failed: ", error)
        })
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <p>Query</p>
        </div>
    )
}

export default Transiction
