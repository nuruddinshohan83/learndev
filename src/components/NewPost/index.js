import { useEffect, useRef, useState } from "react"
import "./style.css"
const NewPost = () => {
    let [img, setImg] = useState()
    let imgContainer = useRef()
    function handleChange(e) {
        setImg(URL.createObjectURL(e.target.files[0]))
    }
    useEffect(() => {
        imgContainer.current.style.backgroundImage = `url('${img}')`
    }, [img])
    return (
        <div className="container">
            <form>
                <div className="post-cover row" ref={imgContainer}>
                    <input
                        className="img-input col"
                        onChange={handleChange}
                        type="file"
                    ></input>
                </div>
                <textarea
                    className="heading input"
                    placeholder="Post title "
                    rows="1"
                ></textarea>
                <textarea
                    className="sub-heading input"
                    placeholder="Sub Heading "
                    rows="1"
                ></textarea>
                <textarea
                    className="contant input"
                    placeholder="Contant "
                ></textarea>
            </form>
        </div>
    )
}

export default NewPost
