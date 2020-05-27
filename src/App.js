import React from 'react';
import './App.css';
import SignIn from "./components/SignIn";
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
const App = () => (
    <BrowserRouter>
        <Switch>        {/* 用来渲染匹配地址的第一个<Route>或者<Redirect> */}
            <Redirect exact from="/" to="/login" />              {/* <Redirect> 跳转到home */}
            <Route path='/home' component={Main}></Route>       {/* 匹配路由为 /home 的请求，显示List组件 */}
            <Route path='/login' component={SignIn}></Route>
        </Switch>
        <Footer></Footer> {/* 页脚 © copyright等信息 */}
    </BrowserRouter>
);


export default App;
