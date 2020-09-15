import React  from "react";
import E from 'wangeditor'
import {Button} from "antd"


export default class Rich extends React.Component{
    constructor(props,context) {
        super(props,context);
        this.state = {
            editorContent: ''
        }
    }

    componentDidMount() {
        const elem = this.refs.editorElem
        const editor = new E(elem)
        editor.customConfig.uploadImgServer="http://localhost:8081/img/uploads";
        editor.customConfig.uploadFileName = 'file'
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
        }
        editor.create()
    }

    clickHandle=()=>{
        console.log(this.state.editorContent)
    }

    render() {
        return (<div className="card-wrap">
            <div ref="editorElem" style={{textAlign: 'left'}}>
            </div>
            <Button onClick={this.clickHandle}>获取内容</Button>
        </div>);
    }
}