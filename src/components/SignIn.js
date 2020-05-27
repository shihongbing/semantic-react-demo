import React,{Component} from "react";
import logoSrc from "./../assets/img/logo.png";
import {
    Button, Checkbox,
    Container,
    Divider,
    Form,
    Grid,
    Header, Image,
    Input,
    List,
    Message,
    Segment
} from "semantic-ui-react";
import Footer from "./Footer";
import {BrowserRouter, Link} from "react-router-dom";

class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.body.className ="Login__login___sCItb";
    }
    
    render() {
        return(
            <Container style={{paddingTop:'10%'}}>
                <Grid columns={4} >
                    <Grid.Column width={7}>
                        <Header as='h2'>
                            欢迎使用泰岳安全任务单管理系统
                        </Header>
                        <List divided relaxed>
                            <List.Item>1.建议使用1280*800分辨率. </List.Item>
                            <List.Item>2.浏览器请使用谷歌、火狐,IE11,Edge</List.Item>
                            <List.Item>3.登录帐号与登录公司pmo平台的帐号一致,登录后请修改初始密码 </List.Item>
                            <List.Item>4.第一次登录可能有点慢,请耐心等待!遇到问题请咨询:(qq:619869280) </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={6} vertical>
                        <Segment color='orange' padded style={{"border-radius":"1px"}}>
                            <Header as='h2' color='teal' textAlign='center'>
                                <Image src={logoSrc} /> 帐号登录
                            </Header>
                            <Form size="large">
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="邮箱、手机、帐号"
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="密码"
                                    type="password"
                                />
                                <Input
                                    label={{ icon: 'asterisk' }}
                                    labelPosition='left corner'
                                    placeholder='验证码'
                                />
                                <Divider hidden />
                                <Button color="teal" fluid size="large">
                                    登录
                                </Button>
                                <Divider hidden />

                                <Checkbox label='记住我'/>
                                <div dangerouslySetInnerHTML={{__html: '&nbsp;' }} />
                                <Link to="/pwdReset/">忘记密码?</Link>
                            </Form>
                        </Segment>
                        <Message error style={{"border-radius":"1px"}}>
                            还没有帐号? <a href="#">注册</a>
                        </Message>
                    </Grid.Column>
                </Grid>
                <Divider></Divider>
            </Container>
        )
    }
}
export default SignIn