import Sidebar from "./Sidebar"
import Mainbar from "./Mainbar"
import Navbar from "./Navbar"

import "./index.css"

const Layout = ({ postComp, sidePost }) => {
    return (
        <div className="row">
            <Navbar />
            <Mainbar>{postComp}</Mainbar>
            <Sidebar>{sidePost} </Sidebar>
        </div>
    )
}

export default Layout
