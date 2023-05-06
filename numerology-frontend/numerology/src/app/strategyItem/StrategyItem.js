import React from "react";
import "./StrategyItem.css"

class StrategyItem extends React.Component {

    render () {
        return (
            <div className="StrategyItem">
                <div>{this.props.author}</div>
                <div>{this.props.context}</div>
            </div>
        )
    }
}

export default StrategyItem;