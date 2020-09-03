import axios from "../../utils/axios";
import constant from "../../utils/constant";

export default class Service  {
     static login(username,password){
             return  axios.postFormData(constant.login,{
                 username,
                 password
             });
     }
};