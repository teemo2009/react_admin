import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Login from "./pages/login"
import Admin from "./App"
import Button from "./pages/ui/button"
import Upload from './pages/ui/upload'
import NoMatch from "./pages/nomatch";
import Home from "./pages/home"
import LoginForm from "./pages/form/login";
import HookForm from  './pages/form/hook';
import Rich from './pages/rich'

export default class IRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Main>
                    <Switch>
                    <Redirect exact  path="/" to="/admin/home"/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}/>
                                <Route path="/admin/ui/button" component={Button}/>
                                <Route path="/admin/form/login" component={LoginForm} />
                                <Route path="/admin/form/hook" component={HookForm} />
                                <Route path="/admin/rich" component={Rich}/>
                                <Route path="/admin/ui/upload" component={Upload}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                    </Switch>
                </Main>
            </BrowserRouter>
        )
    }
}