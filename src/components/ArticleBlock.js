import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './ArticleBlock.scss';

class ArticleBlock extends Component {
    constructor(props) {
        super(props);
    }

    renderContent() {
        const { article } = this.props;

        if(article && article.paragraphs) {
            const content = article.paragraphs[0].paragraph,
                  length = 180,
                  dots = content.length > length ? '...' : '';

            return (
                <div className="content">
                    {content.substring(0, length) + dots }
                </div>
            )
        }

        return null;
    }

    renderDelete() {
        const { isAdmin, article, handleDelete } = this.props;

        if(!isAdmin) return null;

        return <div className="deleteCross" onClick={() => handleDelete(article.id)}/>
    }

    render() {
        const {article, isAdmin} = this.props;

        const url = isAdmin ? `/admin/article/${article.id}` : `/article/${article.id}`;

        return (
            <div className="article">
                <div className="title">
                    <Link to={url} className="link">{article.title}</Link>
                </div>
                <div className="date">Date: {article.createdAt}</div>
                {this.renderContent()}
                {this.renderDelete()}
            </div>
        )
    }
}

export default ArticleBlock;