import React from "react";
import "./index.less"
export  default class Home extends React.Component{

    constructor(props,context) {
        super(props,context);

    }

    componentDidMount() {

    }

    render() {
        return (<div className="home-wrap">
            欢迎来到后台
        </div>);
    }
}