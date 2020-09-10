import React from "react";
import {Row,Col} from 'antd'
import './index.less'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import constant from "../../utils/constant";

class Header extends React.Component{
	
	constructor() {
	    super();
	    this.state={
	    	username:''
		}
	}

	componentDidMount() {
		let loginInfoStr = localStorage.getItem(constant.login_info);
		if (loginInfoStr){
			let loginInfo =JSON.parse(loginInfoStr);
			let username=loginInfo.username;
			this.setState({
				username:username
			})
		}else{
			this.props.history.push("/login");
		}
	}

	logout=()=>{
		localStorage.removeItem(constant.login_info);
		this.props.history.push("/login");
	}

	render() {
		return (
            <div className="header">
				<Row className="top">
					<Col span="24">
						<span>欢迎,{this.state.username}</span>
						<a href='' onClick={this.logout}>
							退出
						</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col span="4" className="title">
						{this.props.menuName}
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

const mapStateToProps=state=>{
	return {
		menuName:state.menuName
	}
}

export  default connect(mapStateToProps)(withRouter(Header))