import React, {Component} from "react";
import logoSrc from "../../assets/img/logo.png";
import {Accordion, Breadcrumb, Form, Grid, Icon, Image, List, Menu, Segment, Sidebar} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import ImageDropDown from "./components/ImageDropDown";
import PendDropDown from "./components/PendDropDown";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            activeItem: 'home',
            visible: true,
            activeIndex: 0
        }
    }
    toggleVisibility = () => this.setState({visible: !this.state.visible});
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render() {
        const {visible,activeIndex} = this.state;
        const SizeForm = (
            <Form>
                <Form.Group grouped>
                    <Form.Radio label='Small' name='size' type='radio' value='small' />
                    <Form.Radio label='Medium' name='size' type='radio' value='medium' />
                    <Form.Radio label='Large' name='size' type='radio' value='large' />
                    <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
                </Form.Group>
            </Form>
        )

        const spanForm = (
            <List relaxed>
                <List.Item as={NavLink} to='/abc'>abdefff</List.Item>
                <List.Item as={NavLink} to='/abc'>abdefff</List.Item>
                <List.Item as={NavLink} to='/abc'>abdefff</List.Item>
                <List.Item as={NavLink} to='/abc'>abdefff</List.Item>
            </List>
        )
        return (
            <div style={{height: '100vh'}}>
                <Sidebar.Pushable as={Segment} vertical>
                    <Sidebar as={Menu}
                             animation="push"
                             direction="left"
                             visible={visible} vertical inverted secondary style={{backgroundColor:'#2D4251'}}>
                        <Image src={logoSrc} style={{ marginRight: '1.5em' }} />
                        <Accordion inverted>
                            <Menu.Item>
                                <Accordion.Title
                                    active={activeIndex === 0}
                                    index={0}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='home' className='titleIcon'/>首页
                                    <Icon name='dropdown' style={{float:'right'}}/>
                                </Accordion.Title>
                            </Menu.Item>

                            <Menu.Item>
                                <Accordion.Title
                                    active={activeIndex === 1}
                                    index={1}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='user' className='titleIcon'/>帐号管理
                                    <Icon name='dropdown' style={{float:'right'}}/>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 1}>
                                    <Menu.Menu>
                                        <Menu.Item as={NavLink} name='帐号增删改' to='/abc'/>
                                        <Menu.Item as={NavLink} name='帐号授权1' to='/abc'/>
                                        <Menu.Item as={NavLink} name='帐号授权2' to='/abc'/>
                                    </Menu.Menu>
                                </Accordion.Content>
                            </Menu.Item>
                            <Menu.Item>
                                <Accordion.Title
                                    active={activeIndex === 2}
                                    index={2}
                                    onClick={this.handleClick}>
                                    <Icon name='gamepad' className='titleIcon'/>系统管理
                                    <Icon name='dropdown' style={{float:'right'}}/>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 2}>
                                   <Menu.Menu>
                                       <Menu.Item as={NavLink} name='帐号增删改' to='/abc'/>
                                       <Menu.Item as={NavLink} name='帐号授权1' to='/abc'/>
                                       <Menu.Item as={NavLink} name='帐号授权2' to='/abc'/>
                                   </Menu.Menu>
                                </Accordion.Content>
                            </Menu.Item>

                            <Menu.Item>
                                <Accordion.Title
                                    active={activeIndex === 3}
                                    index={3}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='home' className='titleIcon'/>首页
                                    <Icon name='dropdown' style={{float:'right'}}/>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 3}>
                                    <Menu.Menu>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                    </Menu.Menu>
                                </Accordion.Content>
                            </Menu.Item>

                            <Menu.Item>
                                <Accordion.Title
                                    active={activeIndex === 3}
                                    index={3}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='home' className='titleIcon'/>首页
                                    <Icon name='dropdown' style={{float:'right'}}/>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 3}>
                                    <Menu.Menu>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                    </Menu.Menu>
                                </Accordion.Content>
                            </Menu.Item>

                            <Menu.Item>
                                <Accordion.Title
                                    active={activeIndex === 3}
                                    index={3}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='home' className='titleIcon'/>首页
                                    <Icon name='dropdown' style={{float:'right'}}/>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 3}>
                                    <Menu.Menu>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                    </Menu.Menu>
                                </Accordion.Content>
                            </Menu.Item>

                            <Menu.Item>
                                <Accordion.Title
                                    active={activeIndex === 3}
                                    index={3}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='home' className='titleIcon'/>首页
                                    <Icon name='dropdown' style={{float:'right'}}/>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 3}>
                                    <Menu.Menu>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                    </Menu.Menu>
                                </Accordion.Content>
                            </Menu.Item>

                            <Menu.Item>
                                <Accordion.Title
                                    active={activeIndex === 3}
                                    index={3}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='home' className='titleIcon'/>首页
                                    <Icon name='dropdown' style={{float:'right'}}/>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 3}>
                                    <Menu.Menu>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统日志' to='/abc'/>
                                        <Menu.Item as={NavLink} name='系统配置' to='/abc'/>
                                    </Menu.Menu>
                                </Accordion.Content>
                            </Menu.Item>
                        </Accordion>
                    </Sidebar>

                    <Sidebar.Pusher>
                        <Segment basic>
                            <Grid>
                                {/*头部导航栏*/}
                                <Grid.Row color='teal' columns='equal'>
                                    {/* align justify,bars,sliders horizontal*/}
                                    <Grid.Column>
                                        <Icon name='align justify' color='white' size='big' onClick={this.toggleVisibility}></Icon>
                                    </Grid.Column>
                                    <Grid.Column textAlign='right'>
                                        <PendDropDown></PendDropDown>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <ImageDropDown name='欢迎您：shihongbing'></ImageDropDown>
                                    </Grid.Column>
                                </Grid.Row>
                                {/*当前位置*/}
                                <Grid.Row className={'curr-position'} container>
                                    <Grid.Column>
                                        <Breadcrumb>
                                            <Breadcrumb.Section link>首页</Breadcrumb.Section>
                                            <Breadcrumb.Divider />
                                            <Breadcrumb.Section link>帐号管理</Breadcrumb.Section>
                                            <Breadcrumb.Divider />
                                            <Breadcrumb.Section active>帐号授权</Breadcrumb.Section>
                                        </Breadcrumb>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                            {/**mainContent**/}
                            <Grid>
                                <Grid.Row>
                                    <Segment>
                                        <p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p><p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p><p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p>

                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        <p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p><p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p><p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p>

                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        <p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p><p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p><p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p>

                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        <p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p><p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p><p>asdasddsadsa</p>
                                        <p>asdasddsadsa</p>

                                    </Segment>
                                </Grid.Row>
                            </Grid>
                            {/**footer**/}
                            <Grid className={'footer'}>
                                <Segment color='teal' vertical tertiary attached>
                                    <div>
                                        <strong>Copyright</strong> ultrapower.com &copy; 2020
                                    </div>
                                </Segment>
                            </Grid>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}
export default Home