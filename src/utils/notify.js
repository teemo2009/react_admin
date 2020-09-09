import {notification} from 'antd'

export default class Notify{
    static show(type,title,msg){
        notification[type]({
            message: title,
            duration: 2,
            description: msg,
        });
    }

    static error(msg,errorCode=0){
        if (errorCode!==0){
            this.show('error','错误','错误代码:'+errorCode+",详情:"+msg);
        }else{
            this.show('error','错误',''+msg);
        }
    }

}