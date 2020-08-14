import axios from "axios";
import {BASE_URL} from "../config";

axios.defaults.timeout = 30000;
axios.defaults.baseURL = BASE_URL;
// 请求前拦截
axios.interceptors.request.use(
    config => {
        //console.log("发请求了,以后要在这里带上令牌");
        config.headers = {
            "Authorization": "Bearer "+localStorage.getItem("token")
        };
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//返回后拦截 在response之前
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        if(err.response){
            if (err.response.status === 504 || err.response.status === 404) {
                console.log("服务器被吃了⊙﹏⊙∥");
            } else if (err.response.status === 401) {
                console.log("登录信息失效⊙﹏⊙∥");
            } else if (err.response.status === 500) {
                console.log("服务器开小差了⊙﹏⊙∥");
            }
            return Promise.reject("请求失败,发生"+err.response.status+"错误!");
        }else{
            return Promise.reject("请求失败,发生"+err+"错误!");
        }
    }
);

//@RequestBody请求
const postRequestBody = (url, params) => {
    return axios({
        method: "post",
        url: `${BASE_URL}${url}`,
        data: params,
        headers: {
            "Content-Type": "application/json,charset=UTF-8"
        }
    });
};

//@RequsetParam请求
const postRequestParam = (url, params) => {
    return axios({
        method: "post",
        url: url,
        data: params,
        transformRequest: [
            function(data) {
                let ret = "";
                for (let it in data) {
                    ret +=
                        encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
                }
                return ret;
            }
        ],
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
};
//get请求
const get = url => {
    return axios({
        method: "get",
        url: url
    });
};
//多个请求
const multiple = function(requsetArray, callback) {
    axios.all(requsetArray).then(axios.spread(callback));
};

const http = {
    postRequestBody: postRequestBody,
    postRequestParam:postRequestParam,
    get: get,
    multiple:multiple
};

export default http
