import { useEffect, useRef, useState } from "react"
import imgAsset from "../../assets/icons/Discussion.svg"
import "./style.css"

const ImageUploader = () => {
    let [img, setImg] = useState("")
    let imgContainer = useRef()
    useEffect(() => {
        //console.log(imgContainer.current)
        imgContainer.current.style.backgroundImage = `url('${img}')`
    }, [img])

    function handleChange(e) {
        setImg(URL.createObjectURL(e.target.files[0]))
        console.log(e.target.files[0])
    }

    return (
        <div>
            <form>
                <div className="img-container" ref={imgContainer}></div>
                <input type="file" onChange={handleChange}></input>
                <button>Upload</button>
            </form>
        </div>
    )
}

export default ImageUploader
