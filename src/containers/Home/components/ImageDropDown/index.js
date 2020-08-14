import React, {Component} from "react";
import {Dropdown, Icon} from "semantic-ui-react";

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
            { key: 'user', text: '帐号管理', icon: 'user' },
            { key: 'settings', text: '系统设置', icon: 'settings' },
            { key: 'sign-out', text: '登出', icon: 'sign out' },
        ]
        return(<Dropdown
            trigger={trigger}
            options={options}
        />)
    }
}
export default ImageDropDown