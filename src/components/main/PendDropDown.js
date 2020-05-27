import React,{Component} from "react";
import {Dropdown, Grid, Icon, Image, Label} from "semantic-ui-react";
class PendDropDown extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const trigger = (
            //<span><Image avatar src={this.props.avatarSrc} /> {this.props.name}</span>
            <span>
                  <Icon name='bell outline'></Icon>
                  <Label color='red' size='tiny' floating circular>10</Label>
            </span>
        )
        const tagOptions = [
            {
                key: 'Important',
                text: '3个工单需要处理',
                value: 'Important',
                label: { color: 'red', empty: true, circular: true },
            },
            {
                key: 'Announcement',
                text: '2个邮件需要回复',
                value: 'Announcement',
                label: { color: 'blue', empty: true, circular: true },
            },
            {
                key: 'Cannot Fix',
                text: '3个bug需要修改',
                value: 'Cannot Fix',
                label: { color: 'black', empty: true, circular: true },
            },
            {
                key: 'News',
                text: 'News',
                value: 'News',
                label: { color: 'purple', empty: true, circular: true },
            },
            {
                key: 'Enhancement',
                text: 'Enhancement',
                value: 'Enhancement',
                label: { color: 'orange', empty: true, circular: true },
            },
            {
                key: 'Change Declined',
                text: 'Change Declined',
                value: 'Change Declined',
                label: { empty: true, circular: true },
            },
            {
                key: 'Off Topic',
                text: 'Off Topic',
                value: 'Off Topic',
                label: { color: 'yellow', empty: true, circular: true },
            },
            {
                key: 'Interesting',
                text: 'Interesting',
                value: 'Interesting',
                label: { color: 'pink', empty: true, circular: true },
            },
            {
                key: 'Discussion',
                text: 'Discussion',
                value: 'Discussion',
                label: { color: 'green', empty: true, circular: true },
            },
        ]
        return(<Dropdown
            trigger={trigger}
            options={tagOptions}
            pointing='top left'
        />)
    }
}
export default PendDropDown