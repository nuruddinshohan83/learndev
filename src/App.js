import "./App.css"
import Homepage from "./pages/homepage"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Homepage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
