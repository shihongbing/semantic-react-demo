import {AUTH_SERVER_URL} from "../config";
import http from "../utils/http";

// 登录验证
export const pwdAuth = (authParams) => {
    return http.postRequestParam(`${AUTH_SERVER_URL}`+'/oauth/token',authParams);
}