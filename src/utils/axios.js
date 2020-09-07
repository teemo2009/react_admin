import axios from "axios"
import Qs from "qs"



export default class Axios  {

    /**
     *  json 格式
     * */
    static post(url,paramObject){
        let screenLoadingDom=document.getElementById("screen_loading");
        screenLoadingDom.style.display='flex';
        return  new Promise(((resolve, reject) => {
            axios.post(url,paramObject).then(response=>{
                if (response.status===200){
                    if (response.data.code===0){
                        resolve(response.data);
                    }else{
                       console.log(response.data.message)
                    }
                }
            }).catch(error=>{
                reject(error);
            }).finally(()=>{
                screenLoadingDom.style.display='none';
            })
        }));
    }

    /**
     *  Form Data 格式
     * */
   static postFormData(url,paramObject){
        let screenLoadingDom=document.getElementById("screen_loading");
        screenLoadingDom.style.display='flex';
        return new Promise(((resolve, reject) => {
            axios.request({
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
            }).then(response=>{
                if (response.status===200){
                    if (response.data.code===0){
                        resolve(response.data);
                    }else{
                        console.log(response.data.message)
                    }
                }
            }).catch(error=>{
                reject(error);
            }).finally(()=>{
                screenLoadingDom.style.display='none';
            })
        }));
    }


}