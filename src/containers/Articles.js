import React, {Component} from 'react'
import { connect } from 'react-redux';
import { articleActions } from '../actions';
import ArticleBlock from '../components/ArticleBlock';
import './Articles.scss';

class Articles extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticles() {
        const { articles } = this.props;
        if(!articles.length) return null;

        return (
            articles.map((article) => (
                <ArticleBlock article={article} key={article.id} />
            ))
        )
    }

    render() {
        return (
            <div className="container">
                {this.renderArticles()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { authentication, articles } = state;
    const { user } = authentication;
    return {
        user,
        articles
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: () => dispatch(articleActions.getArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);