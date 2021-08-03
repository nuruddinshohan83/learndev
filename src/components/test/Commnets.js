import Comment from "./Comment"
import { useState } from "react"
import AddData from "./AddData"
import firebase from "../../firebase/config"
import "./style.css"

const Commnets = () => {
    let [toggle, setToggle] = useState(false)
    let [ancestor, setAncestor] = useState([])

    let ref = firebase.firestore().collection("comments")
    function getParentComments() {
        //console.log("fucntion called ")
        ref.where("postid", "==", "test")
            .where("parent", "==", null)
            .get()
            .then((querySnapshot) => {
                let anc = []

                querySnapshot.forEach((doc) => {
                    let temp = doc.data()
                    temp.id = doc.id
                    anc.push(temp)
                })
                console.log(anc)
                setAncestor(anc)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error)
            })
    }
    function loadComment() {
        setToggle(!toggle)
        //console.log(comment.length)
        if (ancestor.length === 0) {
            //console.log("empty")
            getParentComments()
        }
    }

    return (
        <div className="">
            <div onClick={loadComment}>Comment</div>
            {toggle && (
                <CommentHolder>
                    <p>comment holder</p>
                    {ancestor.map((el, i) => {
                        if (el.parent === null) {
                            return (
                                <Comment
                                    ancestor={ancestor}
                                    data={el}
                                    key={i}
                                ></Comment>
                            )
                        }
                    })}
                </CommentHolder>
            )}
        </div>
    )
}
function CommentHolder(props) {
    return (
        <div>
            <p>test</p>
            {props.children}
        </div>
    )
}
export default Commnets
/*

*/
