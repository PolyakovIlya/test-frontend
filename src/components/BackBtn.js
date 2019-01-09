import React, {Component} from 'react';
import history from '../store/history';
import './BackBtn.scss';

class BackBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="backBtn" onClick={() => history.goBack()}>{'Back'}</div>
        )
    }
}

export default BackBtn;

