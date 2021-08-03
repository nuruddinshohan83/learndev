import { useState } from "react"
import "./style.css"
import userimg from "../../assets/img/userimg.jpg"
import firebase from "../../firebase/config"
import NestedSection from "./NestedSection"

const Comment = (props) => {
    let [replyToggle, setReplyToggle] = useState(false)
    let [nestedToggle, setNestedToggle] = useState(false)
    let [nestedComment, setNestedComment] = useState([])

    function fetchNestedComment() {
        let ref = firebase.firestore().collection("comments")
        ref.where("ancestor", "==", `${props.data.id}`)
            .get()
            .then((querySnapshot) => {
                let data = []

                querySnapshot.forEach((doc) => {
                    let temp = doc.data()
                    temp.id = doc.id
                    data.push(temp)
                })
                //console.log(data)
                setNestedComment(data)
            })
            .catch((error) => {
                //console.log("Error getting documents: ", error)
            })
    }

    return (
        <div className="comment col">
            <div className="row">
                <div
                    className="userimg"
                    style={{
                        backgroundImage: `url("${userimg}")`,
                    }}
                ></div>
                <div className="">
                    <p>User Name</p>
                    <p>Post time</p>
                </div>
            </div>
            <p>{props.data.id}</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
            </p>
            <div className="row">
                <div
                    className="comment-btn"
                    onClick={() => {
                        setNestedToggle(!nestedToggle)
                        if (nestedComment.length === 0) {
                            //console.log("nestedComment == 0")
                            fetchNestedComment()
                        }
                    }}
                >
                    Comment{" "}
                </div>
                <div
                    className="comment-btn"
                    onClick={() => {
                        setReplyToggle(!replyToggle)
                    }}
                >
                    Reply
                </div>
            </div>
            {nestedToggle && (
                <div>
                    <NestedSection
                        data={props.data}
                        nestedComment={nestedComment}
                    />
                </div>
            )}
            {replyToggle && <CommentReply />}
        </div>
    )
}

const CommentReply = () => {
    return (
        <form>
            <div className="comment-reply">
                <textarea></textarea>
                <button>Reply</button>
            </div>
        </form>
    )
}

export default Comment
