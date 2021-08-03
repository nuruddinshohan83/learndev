import "./App.css"
import Homepage from "./pages/homepage"
import ImageUploader from "./components/ImageUploader"
import SignIn from "./pages/auth/SignIn"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import NewPost from "./components/NewPost"
//import SignUp from "./pages/auth/SignUp"

import Commnets from "./components/test/Commnets"
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Homepage} />
                </Switch>

                <Switch>
                    <Route path="/post" exact component={Commnets} />
                </Switch>

                <Switch>
                    <Route path="/upload" exact component={ImageUploader} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
/*

                <Switch>
                    <Route path="/new" exact component={NewPost} />
                </Switch>
                <Switch>
                    <Route path="/auth" exact component={SignIn} />
                </Switch>
                <Switch>
                    <Route path="/signup" exact component={SignUp} />
                </Switch>

*/
