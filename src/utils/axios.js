import axios from "axios"
import notify from "./notify";
import constant from "./constant";
import Qs from "qs"

export default class Axios {

    /**
     *  json 格式
     * */
    static post(url, paramObject) {
        let screenLoadingDom = document.getElementById("screen_loading");
        screenLoadingDom.style.visibility = 'visible';
        return new Promise(((resolve, reject) => {
            axios.post(url, paramObject).then(response => {
                if (response.status === constant.HTTP_SUCCESS) {
                    let data = response.data;
                    if (data.success) {
                        resolve(data.result);
                    } else {
                        notify.error(data.message, data.code)
                    }
                } else {
                    notify.error("HTTP请求响应错误", response.status)
                }
            }).catch(error => {
                reject(error);
                notify.error(error);
            }).finally(() => {
                setTimeout(() => {
                    screenLoadingDom.style.visibility = 'hidden';
                }, 500)
            })
        }));
    }

    /**
     *  Form Data 格式
     * */
    static postFormData(url, paramObject) {
        let screenLoadingDom = document.getElementById("screen_loading");
        screenLoadingDom.style.visibility = 'visible';
        return new Promise(((resolve, reject) => {
            axios.request({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                transformRequest: [function (data) {      //在请求之前对data传参进行格式转换
                    data = Qs.stringify(data)
                    return data
                }],
                url: url,                           //接口地址
                method: 'post',                             //请求类型
                params: {},
                data: paramObject
            }).then(response => {
                if (response.status === constant.HTTP_SUCCESS) {
                    let data = response.data;
                    if (data.success) {
                        resolve(data.result);
                    } else {
                        notify.error(data.message, data.code)
                    }
                } else {
                    notify.error("HTTP请求响应错误", response.status)
                }
            }).catch(error => {
                reject(error);
                notify.error(error);
            }).finally(() => {
                setTimeout(() => {
                    screenLoadingDom.style.visibility = 'hidden';
                }, 500)
            })
        }));
    }


}