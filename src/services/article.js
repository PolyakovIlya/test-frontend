import api from './api';

const getArticles = () => {
    return api.get(`/articles`)
        .then(articles => {
            return articles;
        });
};

const getArticle = (id) => {
    return api.get(`/articles/${id}`)
        .then(article => {
            return article;
        });
};

const createArticle = (data) => {
    return api.post(`/articles`, {article: {url: data}})
        .then(article => {
            return article;
        });
};

const deleteArticle = (id) => {
    return api.delete(`/articles/${id}`)
        .then(payload => {
            return payload;
        });
};

export const articleService = {
    getArticles,
    getArticle,
    deleteArticle,
    createArticle
};