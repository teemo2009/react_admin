import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Login from "./pages/login"
import Admin from "./App"
import Button from "./pages/ui/button"
import NoMatch from "./pages/nomatch";
import Home from "./pages/home"
import LoginForm from "./pages/form/login";

export default class IRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Main>
                    <Redirect path="/" to="/admin/home"/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}/>
                                <Route path="/admin/ui/button" component={Button}/>
                                <Route path="/admin/form/login" component={LoginForm} />
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>

                </Main>
            </BrowserRouter>
        )
    }
}