import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts.js';

const rootReducer = combineReducers({
	posts: PostsReducer
});

export default rootReducer;
