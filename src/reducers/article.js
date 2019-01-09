import {articleConstants} from '../constants';

const initialState = [];

const articles = (state = initialState, action) => {
    switch(action.type) {
        case articleConstants.ARTICLES_REQUEST:
            return state;

        case articleConstants.ARTICLES_SUCCESS:
            return action.articles;

        case articleConstants.ARTICLES_FAILURE:
            return {};

        case articleConstants.CREATE_ARTICLE_REQUEST:
            return state;

        case articleConstants.CREATE_ARTICLE_SUCCESS:
            return [
                action.article,
                ...state
            ];

        case articleConstants.CREATE_ARTICLE_FAILURE:
            return {};

        case articleConstants.DELETE_ARTICLE_REQUEST:
            return state;

        case articleConstants.DELETE_ARTICLE_SUCCESS:
            return state.filter((item) => (item.id !== parseInt(action.payload.id)));

        case articleConstants.DELETE_ARTICLE_FAILURE:
            return {};

        default:
            return state
    }
};

const article = (state = {}, action) => {
    switch (action.type) {
        case articleConstants.ARTICLE_REQUEST:
            return state;

        case articleConstants.ARTICLE_SUCCESS:
            return action.article;

        case articleConstants.ARTICLE_FAILURE:
            return {};

        case articleConstants.UPDATE_ARTICLE_PARAGRAPH:
            return {
                ...state,
                paragraphs: [
                    ...state.paragraphs.slice(0, action.id),
                    {paragraph: action.text},
                    ...state.paragraphs.slice(action.id + 1)
                ]
            };

        default:
            return state
    }
};

export {articles, article}