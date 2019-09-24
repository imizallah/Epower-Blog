import {FETCH_POST, FETCH_SINGLE_POST} from './types';
import {getPosts} from '../components/GetData'

/**
 * Each action or actin creator is going to be a function that we need to export
 * The thunk midleware allows us to use or call the 'dispatch' function directly so that e can make asynchronous requests
 */

export const fetchPosts = () => dispatch =>{ // 'Dispatch' is like a resolver in a promise, whenever e want to send the data we call 'Dispatch'
	let postUrl = `${getPosts}`;
	fetch(postUrl)
	.then(res => res.json()) // Specifying that we want a JSON response
	.then(posts => dispatch({ // Dispatching the data (Posts) to the reducer
		type: FETCH_POST,
		posts
	}));
}

export const fetchSinglePost = () => dispatch => {
	let singlePostUrl = 'https://epower.ng/wp-json/wp/v2/posts/3816';
	fetch(singlePostUrl)
	.then(res => res.json())
	.then(post => dispatch({
		type: FETCH_SINGLE_POST,
		post
	}));
}