import React from "react";
import service from "./service";
import constant from "../../utils/constant";
import md5 from 'md5'
import {Button, Card, Checkbox, Form, Input} from "antd";
import "./index.less"

export default class Login extends React.Component {

    layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
        },
    }

    tailLayout = {
        wrapperCol: {
            offset: 4,
            span: 20,
        },
    }


    constructor() {
        super();
        this.state={
            username:'',
            password:'',
            remember:false
        }
        let userInfoJson= localStorage.getItem(constant.login_info);
        if (userInfoJson){
            let userInfo= JSON.parse(userInfoJson);
            if (userInfo.remember){
                this.state={
                    username:userInfo.username,
                    password:userInfo.password,
                    remember:userInfo.remember
                }
            }

        }
    }


    onFinish = formData => {
        let username = formData['username'];
        let password = formData['password'];
        let remember = formData['remember'];
        let passwordMd5=md5(password);
        service.login(username, passwordMd5).then(res => {
            localStorage.setItem(constant.login_info, JSON.stringify({
                username, password, remember
            }));
            this.props.history.push('/admin/home');
        });
    };

    onFinishFailed = errorInfo => {
    };


    componentDidMount() {

    }


    render() {
        return (<div className='login'>
            <Card className='wrap' title='小卢后台登录'>
                <Form
                    {...this.layout}
                    name="basic"
                    initialValues={{
                        username: this.state.username,
                        password: this.state.password,
                        remember: this.state.remember
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请完善您的账号',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请完善您的密码',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item {...this.tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>)
    }
}