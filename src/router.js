import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Main from "./Main";
import Login from "./pages/login"
import Admin from "./App"
import Button from "./pages/ui/button"
import NoMatch from "./pages/nomatch";
export default class IRouter extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Main>

                    <Route path="/login"  component={Login} />
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/button" component={Button}/>
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    }/>

                </Main>
            </BrowserRouter>
        )
    }
}