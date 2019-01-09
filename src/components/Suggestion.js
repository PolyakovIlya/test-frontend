import React, {Component} from 'react';
import './Suggestion.scss'

class Suggestion extends Component {
    constructor(props) {
        super(props);
    }

    renderButtons() {
        const {suggestion} = this.props;
        if(suggestion.status !== 'pending') return null;

        return (
            <div className="btnBlock">
                {this.renderApprovedBtn()}
                {this.renderDeclinedBtn()}
            </div>
        );
    }

    renderDeclinedBtn() {
        const { handleSuggestionStatus, suggestion } = this.props;

        return <button className="declinedBtn"
                       onClick={() => handleSuggestionStatus(suggestion.id, 'declined')}>Decline</button>
    }

    renderApprovedBtn() {
        const { handleSuggestionStatus, suggestion } = this.props;

        return <button className="approvedBtn"
                       onClick={() => handleSuggestionStatus(suggestion.id, 'approved')}>Approve</button>
    }

    renderDelete() {
        const { handleSuggestionDelete, suggestion } = this.props;

        return <div className="deleteCross" onClick={() => handleSuggestionDelete(suggestion.id)}/>
    }

    renderSuggestion() {
        const {suggestion} = this.props;

        return (
            <div className="suggestion">
                <p className="text">{suggestion.text}</p>
                <span className="status">Current status: {suggestion.status}</span>
                {this.renderButtons()}
                {this.renderDelete()}
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.renderSuggestion()}
            </div>
        )
    }
}

export default Suggestion;

