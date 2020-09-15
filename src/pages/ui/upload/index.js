import React from "react";
import {Card, Row,Col} from "antd";
import Avatar from "./../../../components/util/upload"


class Upload extends React.Component {

    constructor(props) {
        super(props);
    }

    successUrl=(url)=>{
        console.log("图片成功上传",url)
    }


    render() {

        return (
            (
                <div className="main-wrap">
                    <Card  className="card" title="单图片上传">
                        <Row>
                            <Col span={24}>
                                <Avatar getUrl={this.successUrl.bind(this)}/>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="card"  title="单图片上传">
                        <Row>
                            <Col span={24}>
                                <Avatar getUrl={this.successUrl.bind(this)}/>
                            </Col>
                        </Row>
                    </Card>
                </div>
            )
        );
    }
}

export default Upload;