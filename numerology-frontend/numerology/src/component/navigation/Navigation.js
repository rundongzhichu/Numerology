import { Menu } from "antd";
import { Link } from "react-router-dom"

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const menuItems = this.props.menuItems.map(
            (item)=>{
                <Menu.Item key={item.key}>
                    <Link to={item.link}>{item.value}</Link>
                </Menu.Item>
            }
        );
        return (
            <Menu mode={this.props.mode}>
                {menuItems}
            </Menu>
        );
    }
}

export default Navigation;