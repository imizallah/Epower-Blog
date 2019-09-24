// const postsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "SET_POSTS":
//       return action.posts;
//     default:
//       return state;
//   }
// };

// export default postsReducer;

import {combineReducers} from 'redux'; //A function used to combine all our reducers
import postReducer from './postReducer';

export default combineReducers({
	posts: postReducer,
	post: postReducer
});