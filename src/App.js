import React, {Component, Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

class App extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render() {
        return(<Fragment>
            <BrowserRouter>
                <Switch>        {/* 用来渲染匹配地址的第一个<Route>或者<Redirect> */}
                    <Redirect exact from="/" to="/login" />              {/* <Redirect> 跳转到home */}
                    <Route path='/home' component={Home}></Route>       {/* 匹配路由为 /home 的请求，显示List组件 */}
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </BrowserRouter>
        </Fragment>)
    }

}
export default App;
