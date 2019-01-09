import React, { Component } from 'react';
import './Alert.scss';

class Alert extends Component {
    render() {
        const color = {
            'error': '#AA3939',
            'info': '#5e87ac',
            'warning': '#e6c040',
            'success': '#329c5b'
        };

        return (
            <li className="alert" style={{ backgroundColor: color[this.props.errorType] }}>
                <p className="content">
                    {this.props.text}
                </p>
                <button className="dismiss" onClick={this.props.onDismissClick}>
                    x
                </button>
            </li>
        );
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default Alert;