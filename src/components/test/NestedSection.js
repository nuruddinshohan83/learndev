import { useState } from "react"

const NestedSection = (props) => {
    let count = 0
    function func(arr) {
        console.log(arr)
        let nestedComment = props.nestedComment

        return arr.map((arrel) => {
            console.log(
                "🚀 ~ file: NestedSection.js ~ line 7 ~ arr.forEach ~ arrel",
                arrel
            )
            //setCount((el) => el + 1)

            return nestedComment.map((el, i) => {
                if (el.id === arrel) {
                    count += 1
                    console.log("🚀 ~ file: NestedSection.js ~ line 20 ", count)
                    console.log("matched", el)
                    if (el.child.length != 0) {
                        func(el.child)
                        return <p key={el.id}>nested child {el.id}</p>
                    }
                    return <p key={el.id}>nested child {el.id}</p>
                }
            })
        })
    }
    return (
        <div>
            <p>Nested Comment Section</p>
            {props.nestedComment.map((el, i) => {
                return <p key={i}>{el.id}</p>
            })}
            {func(props.data.child)}
        </div>
    )
}

export default NestedSection
