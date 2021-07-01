import Layout from "../../components/Layout"
import Post from "./post/Post"
import SidePost from "./sidepost/SidePost"
const Homepage = () => {
    return (
        <div className="container">
            <Layout postComp={<Post />} sidePost={<SidePost />}></Layout>
        </div>
    )
}

export default Homepage
