import React, {Component} from 'react';
import './Paragraph.scss';

class Paragraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editor: false,
            text: ''
        }
    }

    editClick = () => {
        const {index, paragraph} = this.props;
        this.setState((state) => ({
            editor: !state.editor,
            text: paragraph
        }));
    }

    cancelClick = () => {
        this.setState({editor: false});
    }

    onChangeText = (event) => {
        this.setState({text: event.target.value});
    }

    saveClick = (e) => {
        e.preventDefault();

        const { index, articleId, handleSuggestionCreation } = this.props;
        const suggestion = {
            text: this.state.text,
            articleId: parseInt(articleId),
            status: 'pending',
            paragraphId: index
        };

        handleSuggestionCreation(suggestion);
        this.setState({editor: false});
    }

    renderCancelBtn() {
        return <button className="cancelBtn" onClick={this.cancelClick}>Cancel</button>
    }

    renderEditorView() {
        const {paragraph} = this.props;

        return (
            <>
                <textarea className="text" onChange={this.onChangeText} defaultValue={paragraph}/>
                <button className="editorBtn" onClick={this.saveClick}>Save</button>
                {this.renderCancelBtn()}
            </>
        );
    }

    renderView() {
        const {paragraph, onClickParagraph} = this.props;

        return (
            <>
                <p onClick={() => onClickParagraph()} className="text">{paragraph}</p>
                <button className="editorBtn" onClick={this.editClick}>Edit</button>
                {this.renderCancelBtn()}
            </>
        );
    }

    render() {
        return (
            <div className="paragraph">
                {this.state.editor ? this.renderEditorView() : this.renderView()}
            </div>
        )
    }
}

export default Paragraph;
