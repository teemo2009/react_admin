import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Main from "./Main";
import Login from "./pages/login"
import Admin from "./App"
export default class IRouter extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Main>
                    <Route path="/login"  component={Login} />
                    <Route path="/admin" component={Admin}/>
                </Main>
            </BrowserRouter>
        )
    }
}