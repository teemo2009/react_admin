import React from "react";
import constant from "../../../utils/constant";
import {message, Upload} from 'antd';
import notify from "../../../utils/notify";
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type==='image/gif';
    if (!isJpgOrPng) {
        message.error('图片格式仅支持jpg,png,gif!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片不能大于2M!');
    }
    return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            imageUrl:"",
            loading: false
        };
    }


    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            let response =info.file.response;
            if (response.code===constant.SUCCESS_CODE){
                getBase64(info.file.originFileObj, imageUrl =>{
                        this.setState({
                            imageUrl
                        })
                    }
                );
                this.props.getUrl(response.result);
            }else{
                notify.error(response.message)
            }
            this.setState({
                loading:false
            })
        }

    };

    render() {
        const {loading, imageUrl} = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined/> : <PlusOutlined/>}
                <div style={{marginTop: 8}}>上传</div>
            </div>
        );
        return (
            (
                    <Upload
                        name="file"
                        listType="picture-card"
                        showUploadList={false}
                        action="http://localhost:8081/img/upload"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                    </Upload>
            )
        );
    }
}

export default Avatar;