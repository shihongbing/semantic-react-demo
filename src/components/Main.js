import React,{Component} from "react";
import logoSrc from "./../assets/img/logo.png";
import {
    Button,
    Container,
    Divider,
    Dropdown, Form,
    Grid,
    Header,
    Icon,
    Image, Input,
    List,
    Menu,
    Ref,
    Segment,
    Sidebar
} from 'semantic-ui-react'
import {Route} from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            activeItem: 'home',
            visible: true
        }
    }

    toggleVisibility = () => this.setState({visible: !this.state.visible});

    render() {
        const {visible} = this.state;
        return (
            <div>
                <Sidebar.Pushable as={Segment}  vertical>
                    <Sidebar
                        as={Menu}
                        animation="push"
                        direction="left"
                        visible={visible}
                        inverted
                        vertical
                    >

                        <Menu.Item as='a' header>
                            <Image src={logoSrc} style={{ marginRight: '1.5em' }} />
                            Project Name
                        </Menu.Item>

                        <Menu.Item name="home">
                            <Icon name="home"/>
                            Home
                        </Menu.Item>

                        <Menu.Item name="gamepad">
                            <Icon name="gamepad"/>
                            Games
                        </Menu.Item>
                        <Menu.Item name="camera">
                            <Icon name="camera"/>
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Grid>
                                {/*头部导航栏*/}
                                <Grid.Row color='teal'>
                                    {/* align justify,bars,sliders horizontal*/}
                                    <Grid.Column>
                                        <Icon name='align justify' color='white' size='big' onClick={this.toggleVisibility}></Icon>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Input size='mini'
                                            icon={<Icon name='search' inverted circular link />}
                                            placeholder='搜索...'
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                {/*当前位置*/}
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header>当前位置</Header>
                                        <List celled horizontal>
                                            <List.Item as='a'>首页</List.Item>
                                            <List.Item as='a'>帐号管理</List.Item>
                                            <List.Item as='a'>帐号授权</List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Divider></Divider>
                            {/*main content*/}
                            <Segment vertical style={{"border-radius":"0px"}}>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                                <Header>ADSSDADSDSA</Header>
                            </Segment>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}
export default Main