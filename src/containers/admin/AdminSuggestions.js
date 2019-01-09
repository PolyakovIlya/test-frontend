import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { suggestionActions } from '../../actions';
import ArticleBlock from '../../components/ArticleBlock';
import './AdminSuggestions.scss'
import Suggestion from '../../components/Suggestion';

class AdminSuggestions extends Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        dispatch(suggestionActions.getSuggestions());
    }

    onClickDelete(id) {
        const {dispatch} = this.props;
        console.log(this, id);
        dispatch(suggestionActions.removeSuggestion(id));
    }

    onClickStatus(id, status) {
        const {dispatch} = this.props;

        console.log(this, id, status);

        dispatch(suggestionActions.updateSuggestion(id, status));
    }

    renderSuggestions() {
        const { suggestions } = this.props;
        if(!suggestions.length) return null;

        return (
            suggestions.map((s, index) => (
                <Suggestion
                    key={index}
                    suggestion={s}
                    handleSuggestionDelete={this.onClickDelete.bind(this)}
                    handleSuggestionStatus={this.onClickStatus.bind(this)}
                />
            ))
        )
    }

    render() {
        return (
            <div className="container">
                {this.renderSuggestions()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { suggestions } = state;
    return {
        suggestions
    };
}

export default AdminSuggestions = connect(mapStateToProps)(AdminSuggestions);