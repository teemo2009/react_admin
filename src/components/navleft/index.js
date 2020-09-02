import React from "react";
import { Menu } from 'antd';
import {NavLink} from "react-router-dom";
import MenuConfig from '../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu;


export  default  class NavLeft extends React.Component{

    constructor() {
        super();
        const menuList=this.renderMenu(MenuConfig);
        this.state={
        menuList
        }

    }

    renderMenu=(menuList)=>{
        return menuList.map((item)=>{
        if(item.children){
            return (<SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
            </SubMenu>)
         }
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
                <Menu  mode="inline" theme="dark">
                    {this.state.menuList}
                </Menu>
            </div>
        )
    }
}