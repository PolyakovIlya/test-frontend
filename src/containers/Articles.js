import React, {Component} from 'react'
import { connect } from 'react-redux';
import { articleActions } from '../actions';
import ArticleBlock from '../components/ArticleBlock';
import './Articles.scss';
import Pagination from '../components/Pagination';

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
        const {pagination} = this.props;

        return (
            <div className="container">
                {this.renderArticles()}
                <Pagination pagination={pagination}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    articles: state.articles.data,
    pagination: state.articles.meta
});

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: () => dispatch(articleActions.getArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);