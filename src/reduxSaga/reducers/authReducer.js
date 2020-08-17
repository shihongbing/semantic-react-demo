const initialState = {
    access_token:'',
    refresh_token:'',
    auth_result: false,
    account:'',
    id:'',
    errorMsg:''
};
// action types
export const types = {
    USER_LOGIN: "AUTH/USER_LOGIN",    //登录
    USER_LOGIN_SUCCESS:"AUTH/USER_LOGIN_SUCCESS",//登录成功
    USER_LOGIN_FAILED : "AUTH/USER_LOGIN_FAILED",//登录失败
    USER_SIGNOUT: "AUTH/USER_SIGNOUT" //登出
};

// action creators
export const actions  = {
    login:function(authParams){
        return {
            type: types.USER_LOGIN,
            payload:authParams
        }
    },
    signout: function() {
        localStorage.removeItem("access_token");
        return {
            type: types.USER_SIGNOUT
        };
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS:
            //对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
            return {auth_result:true,...action.payload};
        case types.USER_LOGIN_FAILED:
            return {errorMsg:action.payload.errorMsg,auth_result:false};
        default:
            return state
    }
}

export default reducer;
