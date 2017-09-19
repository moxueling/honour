
require("./style/app.scss")

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import RootComponent from "./script/components/RootComponent"
import MainComponent from "./script/components/MainComponent"
import StraComponent from "./script/components/StraComponent"
import MatchComponent from "./script/components/MatchComponent"

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            <IndexRoute component={MainComponent}/>
            <Route path="main" component={MainComponent}></Route>
            <Route path="stra" component={StraComponent}></Route>
            <Route path="match" component={MatchComponent}></Route>
            <Route path="*" component={MainComponent}></Route>
        </Route>
    </Router>
     ,document.getElementById("app"))
