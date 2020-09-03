import React from "react";
import service from "./service";
import constant from "../../utils/constant";
import {Card,Form, Input, Button, Checkbox} from "antd";

import "./index.less"
export default class Login extends React.Component{

    layout= {
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


    onFinish = formData => {
        let username =formData['username'];
        let password =formData['password'];
        let remember=formData['remember'];
        service.login(username,password).then(res=>{
            if (res.data===true){
                localStorage.setItem(constant.login_info,JSON.stringify({
                    username,password,remember
                }));
                this.props.history.push('/admin/home');
            }
        });
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };




    componentDidMount() {

    }


    render() {
        return (<div className='login'>
            <Card  className='wrap' title='小卢后台登录'>
                <Form
                    {...this.layout}
                    name="basic"
                    initialValues={{
                        remember: false,
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
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
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