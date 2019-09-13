import React, { Component } from 'react';
import FloatButton from '../floatButton';
import './floatButtonContainer.css';
class FloatButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.listButtons = props.buttons;
    }
    render() {
        if (this.listButtons) {
            return (
                <>
                    <div className={`float-button-container  ${this.props.size}`}>
                        <ul>
                            {this.listButtons.map((button,i) =>
                                <FloatButton color={button.color} key={i}
                                    text={button.text} icon={button.icon} />

                            )}
                        </ul>
                    </div>

                </>
            );
        } else {
            return (<></>)
        }
    }
}
export default FloatButtonContainer;