import React, {Component} from 'react'
import { connect } from 'react-redux';
import { articleActions } from '../../actions';
import ArticleBlock from '../../components/ArticleBlock';
import './AdminArticles.scss'

class AdminArticles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: ''
        };

        const {dispatch} = this.props;
        dispatch(articleActions.getArticles());
    }

    onClickDelete(id) {
        const {dispatch} = this.props;
        dispatch(articleActions.deleteArticle(id));
    }

    renderArticles() {
        const { authentication, articles } = this.props;
        if(!articles.length) return null;

        return (
            articles.map((article, index) => (
                <ArticleBlock
                    article={article}
                    isAdmin={authentication.isAdmin}
                    key={index}
                    handleDelete={this.onClickDelete.bind(this)}
                />
            ))
        )
    }

    onInputUrl = (e) => {
        const {value} = e.target;
        this.setState({url: value})
    }

    onSubmitArticleForm = (e) => {
        e.preventDefault();

        const {dispatch} = this.props;
        const {url} = this.state;
        dispatch(articleActions.createArticle(url));
    }

    renderAddArticleForm() {
        return (
            <div className="articleForm">
                <form name="from" onSubmit={this.onSubmitArticleForm}>
                    <input type="text" className="inputForm" name="url" onChange={this.onInputUrl} placeholder="Enter article url"/>
                    <button type="submit" className="button addButton">Add</button>
                </form>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.renderAddArticleForm()}
                {this.renderArticles()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authentication: state.authentication,
    articles: state.articles
});

export default connect(mapStateToProps)(AdminArticles);