import { useState } from "react"
import "./style.css"
import userimg from "../../assets/img/userimg.jpg"

const Comment = () => {
    let [replyToggle, setReplyToggle] = useState(false)
    function fetchCildComment() {}
    return (
        <div className="comment col">
            <div className="row ">
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
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga?
            </p>
            <div className="row">
                <div className="comment-btn" onClick={fetchCildComment}>
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
