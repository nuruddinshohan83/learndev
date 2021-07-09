import Comment from "./Comment"
import { useState } from "react"
import AddData from "./AddData"
import firebase from "../../firebase/config"
import "./style.css"

const Commnets = () => {
    let [toggle, setToggle] = useState(false)
    let [comment, setComment] = useState([])

    let ref = firebase.firestore().collection("comments")
    function getParentComments() {
        console.log("fucntion called ")
        ref.where("postid", "==", "test")
            .get()
            .then((querySnapshot) => {
                let dataItems = []
                querySnapshot.forEach((doc) => {
                    dataItems.push(doc.data())
                })
                console.log(dataItems)
                setComment(dataItems)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error)
            })
    }
    function handleClick() {
        setToggle(!toggle)
        //console.log(comment.length)
        if (comment.length == 0) {
            //console.log("empty")
            getParentComments()
        }
    }
    return (
        <div className="">
            <div onClick={handleClick}>Comment</div>
            {toggle && <Comment />}
            <AddData />
        </div>
    )
}

export default Commnets
