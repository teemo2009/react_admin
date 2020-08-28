import React from "react";
import {Row,Col} from 'antd'
import './index.less'

export  default  class Header extends React.Component{
	
	constructor() {
	    super();
		this.state={
			userName:'小卢'
		}
	}
	
    render() {
        return (
            <div className="header">
				<Row className="top">
					<Col span="24">
						<span>欢迎,{this.state.userName}</span>
						<a href='#'>退出</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col span="4" className="title">
						首页
					</Col>
					<Col span="20" className="weather">
						<span className="date">2020-08-24</span>
						<span className="detail">晴</span>
					</Col>
				</Row>
               
            </div>
        )
    }
}