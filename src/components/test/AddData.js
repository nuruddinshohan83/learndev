import firebase from "../../firebase/config"
const AddData = () => {
    let db = firebase.firestore()
    function addData() {
        db.collection("comments")
            .doc()
            .set({
                child: null,
                content: "this is a comment",
                parent: null,
                postid: "test",
                userinfo: {
                    img: "https://i.imgur.com/n0mCTlL.jpg",
                    name: "shohan",
                },
            })
            .then(() => {
                console.log("Document successfully written!")
            })
            .catch((error) => {
                console.error("Error writing document: ", error)
            })
    }
    return (
        <div>
            <div onClick={addData}> Add data</div>
        </div>
    )
}

export default AddData
