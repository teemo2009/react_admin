import React from "react";
import './style/common.less'
import {Spin} from "antd"
export default class Main extends React.Component{
    render() {
        return (<div>
            <Spin id="screen_loading" className="loading" size="large" />
            {this.props.children}
        </div>);
    }
}