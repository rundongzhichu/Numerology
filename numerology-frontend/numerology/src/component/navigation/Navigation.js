import React from 'react';
import { Menu } from "antd";

class Navigation extends React.Component {

    render() {
        return (
            <Menu items={ this.props.menuItems} mode={this.props.mode}>
            </Menu>
        );
    }
}

export default Navigation;