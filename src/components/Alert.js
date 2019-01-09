import React, { Component } from 'react';
import './Alert.scss';

class Alert extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { onDismissClick } = this.props;
        this.timeout = setTimeout(() => {
            onDismissClick();
        }, 4000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { errorType, text, onDismissClick } = this.props;

        const color = {
            'error': '#AA3939',
            'info': '#5e87ac',
            'warning': '#e6c040',
            'success': '#329c5b'
        };

        return (
            <li className="alert" style={{ backgroundColor: color[errorType] }}>
                <p className="content">
                    {text}
                </p>
                <button className="dismiss" onClick={onDismissClick}>
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