import React,{Component} from "react";
import {Dropdown, Icon, Image} from "semantic-ui-react";
class ImageDropDown extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const trigger = (
            //<span><Image avatar src={this.props.avatarSrc} /> {this.props.name}</span>
            <span><Icon name='user' />{this.props.name}</span>
        )
        const options = [
            { key: 'user', text: '帐号管理11', icon: 'user' },
            { key: 'settings', text: '系统设置11', icon: 'settings' },
            { key: 'sign-out', text: '登出11', icon: 'sign out' },
        ]
        return(<Dropdown
            trigger={trigger}
            options={options}
        />)
    }
}
export default ImageDropDown