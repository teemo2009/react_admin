import {Button, Checkbox, Form, Input} from 'antd';
import React from "react";


export default class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            layout: {
                labelCol: {
                    span: 8,
                },
                wrapperCol: {
                    span: 16,
                }
            },
            tailLayout: {
                wrapperCol: {
                    offset: 8,
                    span: 16,
                }
            }
        }
    }


    onFinish=(values) =>{
        console.log('Success:', values);
    };

    onFinishFailed=(errorInfo)=>{
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Form
                {...this.state.layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...this.state.tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...this.state.tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}