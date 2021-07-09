import firebase from "../../firebase/config"
import { useEffect, useState } from "react"
const Query = () => {
    const ref = firebase.firestore().collection("comments")
    const query = ref.where("postid", "==", "wRWzfNrefFMZFXq7XyUo")
    const [postData, setPostData] = useState([])
    function getData() {
        //console.log(query)
        query.onSnapshot((querySnapshot) => {
            var items = []
            console.log(querySnapshot)
            let arr = querySnapshot
            console.log(arr.docs.length)

            querySnapshot.forEach((doc) => {
                //console.log(doc.data())
                let temp = doc.data()
                temp.id = doc.id
                items.push(temp)
            })
            setPostData(items)
        })
        //console.log(query)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <p>Query</p>
        </div>
    )
}

export default Query
