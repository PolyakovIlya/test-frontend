import {combineReducers} from 'redux'
import authentication from './authentication'
import {articles, article} from './article'
import suggestions from './suggestion'

export default combineReducers({
    authentication,
    articles,
    article,
    suggestions
})