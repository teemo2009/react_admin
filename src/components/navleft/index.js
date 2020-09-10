import React from "react";
import {Menu} from 'antd';
import {NavLink, withRouter} from "react-router-dom";
import MenuConfig from '../../config/menuConfig'
import {connect} from 'react-redux'
import {switchMenu} from "../../redux/action";
import './index.less'

const {SubMenu} = Menu;


class NavLeft extends React.Component {

    keyMap={};

    constructor() {
        super();
        const menuList = this.renderMenu(MenuConfig);
        this.state = {
            menuList,
            currentKey: ''
        }

    }

    handleClick = ({item, key}) => {
        const {dispatch} = this.props;
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentKey: key
        })
        let routerName = this.props.history.location.pathname;
        this.setState({
            currentKey: routerName
        })
    }

    componentDidMount() {
        const {dispatch} = this.props;
        let routerName = this.props.history.location.pathname;
        dispatch(switchMenu(this.keyMap[routerName]))
    }

    renderMenu = (menuList) => {
        return menuList.map((item) => {
            if (item.children) {
                this.keyMap[item.key]=item.title
                return (<SubMenu title={item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                </SubMenu>)
            }
            this.keyMap[item.key]=item.title
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        });
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>小卢后台</h1>
                </div>
                <Menu mode="inline" theme="dark"
                      onClick={this.handleClick}
                      selectedKeys={[this.state.currentKey]}
                >
                    {this.state.menuList}
                </Menu>
            </div>
        )
    }
}

export default connect()(withRouter(NavLeft))