import React, {Component, Fragment} from "react";
import logoSrc from "../../assets/img/logo.png";
import {Container, Dropdown, Grid, Icon, Image, Menu, Message, Segment, Tab} from "semantic-ui-react";
import {connect} from "react-redux";
import PwdLoginForm from "./components/PwdLoginForm";
import Footer from "../../components/Footer";
import {actions as authActions} from "../../reduxSaga/reducers/authReducer";
import {bindActionCreators} from "redux";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    componentDidMount() {
        const auth_result = this.props.auth_result;
        //console.log(this.props.history);
        if(auth_result){
            this.props.history.replace('/home')
        }
    }

    handleTabChange(){

    }

    /**
     * 1. 组件挂载后，接收到新的props后会被调用 该方法内禁止访问this
     * 2. 如果大家仍需要通过this.props来做一些事，可以使用componentDidUpdate
     * 3. 通过对比nextProps和prevState，返回一个用于更新状态的对象
     * 4. React中componentWillReceiveProps的替代升级方案
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth_result) {
            //登录成功转到home页面
            nextProps.history.replace('/home');
            return {
               ...nextProps
            }
        }else{
            return {
                ...nextProps
            }
        }
        // 否则，对于state不进行任何操作
        return null;
    }

    // componentWillReceiveProps(currProps, nextProps) {
    //     alert(currProps.errorMsg);
    //     if (currProps.auth_result) {
    //         console.log("componentWillReceiveProps");
    //         this.props.history.replace('/home')
    //     }else{
    //         this.setState({errorMsg:nextProps.errorMsg});
    //     }
    // }

    render() {
        const panes = [{
            menuItem: (
                <Menu.Item key='pwd'>
                    <Icon name='id badge' color='teal'/>
                    帐号登录
                </Menu.Item>
            ),
            render: () => {return(<Tab.Pane><PwdLoginForm tips={this.props.errorMsg} doLogin={this.props.login}/></Tab.Pane>)}
            },
            {
                menuItem: (
                <Menu.Item key='sms'>
                   <Icon name='stack exchange' color='teal'/>
                    短信登录
                </Menu.Item>
            ),
            render: () => {return(<Tab.Pane><PwdLoginForm/></Tab.Pane>)}
            }]
        return(
            <Fragment>
                {/**Header**/}
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='small' src={logoSrc} style={{ marginRight: '1.5em' }} />
                           泰岳任务单管理系统
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Dropdown item simple text='Dropdown'>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Header Item</Dropdown.Header>
                                <Dropdown.Item>
                                    <i className='dropdown icon' />
                                    <span className='text'>Submenu</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>

                <Container style={{ marginTop: '8em'}}>
                    <Grid columns={2}>
                        {/**友情提示框**/}
                        <Grid.Column width={7}>
                            {/**<Segment raised padded inverted color='teal'  style={{"borderRadius":"0px"}}>
                             <Header as='h3'>
                             友情提示
                             </Header>
                             <List relaxed ordered>
                             <List.Item>建议使用1280*800分辨率. </List.Item>
                             <List.Item>浏览器请使用谷歌、火狐,IE11,Edge</List.Item>
                             <List.Item>登录帐号与登录公司pmo平台的帐号一致,登录后请修改初始密码 </List.Item>
                             <List.Item>请尽量在本人机器上保存密码</List.Item>
                             <List.Item>第一次登录可能有点慢,请耐心等待!遇到问题请咨询:(qq:619869280) </List.Item>
                             </List>
                             </Segment>**/}
                            <Message color='teal' style={{"borderRadius":"0px"}}>
                                <Message.Header>友情提示</Message.Header>
                                <Message.Content></Message.Content>
                                <Message.List>
                                    <Message.Item>建议使用1280*800分辨率.</Message.Item>
                                    <Message.Item>浏览器请使用谷歌、火狐,IE11,Edge</Message.Item>
                                    <Message.Item>登录帐号与登录公司pmo平台的帐号一致,登录后请修改初始密码</Message.Item>
                                    <Message.Item>请尽量在本人机器上保存密码</Message.Item>
                                    <Message.Item>第一次登录可能有点慢,请耐心等待!遇到问题请咨询:(qq:619869280) </Message.Item>
                                </Message.List>
                            </Message>
                        </Grid.Column>

                        {/**登录框**/}
                        <Grid.Column width={6}>
                            <Segment padded size={'small'} style={{"borderRadius":"0px"}}>
                                <Tab panes={panes} onTabChange={this.handleTabChange}/>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>

                {/**Footer**/}
                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Footer></Footer>
                </Segment>
            </Fragment>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    //console.log(state.auth);
    return state.auth;
}

//mapDispatchToProps 函数
const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        ...bindActionCreators(authActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);