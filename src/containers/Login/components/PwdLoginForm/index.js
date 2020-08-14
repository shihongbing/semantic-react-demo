import {Controller, useForm} from "react-hook-form";
import {Button, Divider, Form} from "semantic-ui-react";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AUTH_TYPE_PWD, CLIENT_ID, CLIENT_SECRET} from "../../../../config";
import {actions as authActions} from "../../../../reduxSaga/reducers/authReducer";
export default function PwdLoginForm(props){
    const {handleSubmit,register,setValue,errors,setError,control} = useForm({mode: 'onBlur'});
    const captchaRef = React.useRef(null);

    //登录操作
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log("Submit event");
        data.grant_type = "password";
        data.client_id = CLIENT_ID;
        data.client_secret = CLIENT_SECRET;
        data.auth_type = AUTH_TYPE_PWD;
        //let authParams = JSON.stringify(data);
        //alert(authParams.auth_type);
        props.doLogin(data);
        //setError("account", "notFind", "please choose a different username");
    };

    //切换验证码
    const changeCaptcha =(e) =>{
        e.preventDefault();
        captchaRef.current.src = 'https://60.247.77.224:8843/getKaptcha.do?rdm='+ Math.floor(Math.random() * 100);
    }
    const getAccountTips = ()=>{
        switch (errors.account?.type) {
            case "required":
                return "Your input is required"
            case "minLength":
                return "长度不够"
            default:
                return ""
        }
    }
    //登录表单
    return(
        <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="username"
                control={control}
                rules={{ required: "用户名不能为空!"}}
                defaultValue={props.username || ""}
                as={
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="帐号/邮箱/手机"  size='small'
                        error={errors.username &&
                        errors.username.message}
                    />
                }
            />

        <Fragment>
            <Controller
                name="password"
                control={control}
                rules={{ required: "密码不能为空!"}}
                defaultValue={props.password || ""}
                as={
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="密码"
                        type="password" size='small'
                        error={errors.password &&
                        errors.password.message}
                    />
                }
            />
        </Fragment>

        <Fragment>
            <Controller
                name="captcha"
                control={control}
                rules={{ required: "请输入验证码!"}}
                defaultValue={props.captcha || ""}
                as={<Form.Input style={{"maxWidth":"200px"}}
                    fluid
                    icon="asterisk"
                    iconPosition="left"
                    placeholder="验证码"
                    type="password" size='small'
                    error={errors.captcha &&
                    errors.captcha.message}
                    />
                }
            />
        </Fragment>
        <Divider hidden/>
        <Form.Field>
            <img src='https://60.247.77.224:8843/getKaptcha.do' ref={captchaRef}/>
            <div style={{marginLeft:'200px',fontSize:'12px'}}>
                <strong><a style={{textDecoration:"none"}} href="#" onClick={changeCaptcha}>看不清换一个</a></strong>
            </div>
        </Form.Field>
        <Button color="teal" fluid size="large" type="submit">登录</Button>
        <Divider hidden/>
        <Form.Group>
            <Form.Checkbox label='记住我'/>
            <Link to="/pwdReset/">忘记密码?</Link>
        </Form.Group>
            <div id="pwdLoginErrorTips" className="error-info" style={{display:props.tips? "block":"none"}}>
                {props.tips}
            </div>
    </Form>)
}

// Connect with redux
connect(({ username,password,captcha,errors}) => ({ username,password,captcha,errors}), authActions)(PwdLoginForm);