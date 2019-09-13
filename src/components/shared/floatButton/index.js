import React, { Component } from 'react';
import './floatButton.css';
class FloatButton extends Component {
    render() {
        return (
            <>
                <li>
                    <button className={this.props.color}>{typeof this.props.icon == 'function' ? this.props.icon() : ''}{this.props.text}</button>
                </li>
            </>
        );
    }
}
export default FloatButton;