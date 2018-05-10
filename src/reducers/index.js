import { combineReducers } from 'redux';
import PostsReducer from './reducerPosts.js';

const rootReducer = combineReducers({
	posts: PostsReducer,
});

export default rootReducer;
