import axios from "axios"
import Qs from "qs"



export default class Axios  {

    /**
     *  json 格式
     * */
    static post(url,paramObject){
        return  axios.post(url,paramObject);
    }

    /**
     *  Form Data 格式
     * */
   static postFormData(url,paramObject){
        return  axios.request({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest: [function(data) {      //在请求之前对data传参进行格式转换
                data = Qs.stringify(data)
                return data
            }],
            url:url,                           //接口地址
            method: 'post',                             //请求类型
            params: {},
            data: paramObject
        });
    }


}