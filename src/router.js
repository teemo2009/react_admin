import React ,{Suspense}from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import menuConfig from "./config/menuConfig"
import Main from "./Main";
import Login from "./pages/login"
import Admin from "./App"
import NoMatch from "./pages/nomatch";
export default class IRouter extends React.Component {
    state={
        routerList:null
    }

    getRouter=(data)=>{
        return data.map((item)=>{
            if (item.children){
                return this.getRouter(item.children);
            }
            if (item.pages){
                let component=React.lazy(()=>import(''+item.pages));
                return (<Route path={item.key} component={component} key={item.key}/>)
            }
        })
    }


    componentDidMount() {
        this.setState({
            routerList:this.getRouter(menuConfig)
        })
    }

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
                                <Suspense fallback={<div>正在加载...</div>}>
                                {this.state.routerList}
                                </Suspense>
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