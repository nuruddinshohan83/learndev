import { Link } from "react-router-dom"

import Home from "../../assets/icons/Home.svg"
import Discussion from "../../assets/icons/Discussion.svg"
import Topic from "../../assets/icons/Topic.svg"
import Forum from "../../assets/icons/Forum.svg"

const Navbar = () => {
    return (
        <nav className="col-2 navbar">
            <ul>
                <li>
                    <Link to="/">
                        <div className="row align-item-center ">
                            <img src={Home} /> <p>Home</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <div className="row align-item-center">
                            <img src={Discussion} /> <p>Discussion</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <div className="row align-item-center ">
                            <img src={Topic} /> <p>Topic</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <div className="row align-item-center ">
                            <img src={Forum} /> <p>Forum</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
