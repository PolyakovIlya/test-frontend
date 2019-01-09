import { articleConstants } from '../constants';
import { articleService } from '../services';

export const articleActions = {
    getArticles,
    getArticle,
    deleteArticle,
    createArticle,
    updateArticleParagraph
}


function getArticles() {
    const request = () => ({ type: articleConstants.ARTICLES_REQUEST });
    const success = (articles) => ({ type: articleConstants.ARTICLES_SUCCESS, articles });
    const failure = (error) => ({ type: articleConstants.ARTICLES_FAILURE, error });

    return dispatch => {
        dispatch(request());

        articleService.getArticles()
            .then(
                articles => {
                    dispatch(success(articles));
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };
}

function getArticle (id) {
    const request = (id) => ({ type: articleConstants.ARTICLE_REQUEST, id });
    const success = (article) => ({ type: articleConstants.ARTICLE_SUCCESS, article });
    const failure = (error) => ({ type: articleConstants.ARTICLE_FAILURE, error });

    return dispatch => {
        dispatch(request(id));

        articleService.getArticle(id)
            .then(
                article => {
                    dispatch(success(article));
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };
}

function createArticle (data) {
    const request = (data) => ({ type: articleConstants.CREATE_ARTICLE_REQUEST, data });
    const success = (article) => ({ type: articleConstants.CREATE_ARTICLE_SUCCESS, article });
    const failure = (error) => ({ type: articleConstants.CREATE_ARTICLE_FAILURE, error });

    return dispatch => {
        dispatch(request(data));

        articleService.createArticle(data)
            .then(
                article => {
                    dispatch(success(article));
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };
}

function deleteArticle(id) {
    const request = (id) => ({ type: articleConstants.DELETE_ARTICLE_REQUEST, id });
    const success = (payload) => ({ type: articleConstants.DELETE_ARTICLE_SUCCESS, payload });
    const failure = (error) => ({ type: articleConstants.DELETE_ARTICLE_FAILURE, error });

    return dispatch => {
        dispatch(request(id));

        articleService.deleteArticle(id)
            .then(
                payload => {
                    dispatch(success(payload));
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };
}

function updateArticleParagraph(id, text) {
    return ({ type: articleConstants.UPDATE_ARTICLE_PARAGRAPH, id, text })
}