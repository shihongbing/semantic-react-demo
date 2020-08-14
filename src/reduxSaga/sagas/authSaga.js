import {call, fork, put, take} from 'redux-saga/effects'
import {types as AuthActionTypes} from '../reducers/authReducer'
import {types as AppActionTypes} from '../reducers/appReducer'
import {AUTH_TYPE_PWD} from "../../config";
import * as authService from "../../services/auth_service";
/**
 *
 * 1 yield take(pattern) 函数可以理解为监听未来的action，它创建了一个命令对象，告诉middleware等待一个特定的action，直到一个与pattern匹配的action被发起，才会继续执行下面的语句
 * 2 yield put(action) 函数是用来发送action的 effect，你可以简单的把它理解成为Redux框架中的dispatch函数，当put一个action后，reducer中就会计算新的state并返回。
 * 3 yield call 该方法调用是会阻塞主线程的，具体来说：在call方法调用结束之前，call方法之后的语句是无法执行的
 * 4 yield fork 无阻塞调用
 */

//异步登录认证请求
export function* login(authParams) {
    yield put({type: AppActionTypes.START_REQUEST});
    try {
        //帐号密码认证
        if(authParams.auth_type == AUTH_TYPE_PWD){
            return yield call(authService.pwdAuth, authParams);
        }
    } catch(error) {
        //如果reject 则loginFlow里面的：let response = yield call(login, loginAction.payload);这个response就没有返回
        yield put({
            type: AuthActionTypes.USER_LOGIN_FAILED,
            payload:{errorMsg:error}
        });
    } finally {
        yield put({type: AppActionTypes.FINISH_REQUEST});
    }
}

//登录流程
export function* loginFlow() {
    while (true) {
        //监听 登录事件
        let loginAction = yield take(AuthActionTypes.USER_LOGIN);
        let response = yield call(login, loginAction.payload);
        if(response && response.status === 200){
            //登录成功
            yield put(
                {type:AuthActionTypes.USER_LOGIN_SUCCESS,
                    payload: {...response.data}
                });
            localStorage.setItem("access_token",response.data.access_token);
        }
    }
}



