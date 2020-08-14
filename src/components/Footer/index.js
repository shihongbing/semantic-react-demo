import React, {Component} from 'react';
import {Container, List} from "semantic-ui-react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container textAlign='center'>
                <div>
                    <strong>Copyright</strong> ultrapower.com &copy; 2020
                </div>
                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='#'>
                        关于我们
                    </List.Item>
                    <List.Item as='a' href='#'>
                        联系我们
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                    </List.Item>
                </List>
            </Container>
        )
    }
}

export default Footer;
