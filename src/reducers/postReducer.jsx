import {FETCH_POST, FETCH_SINGLE_POST} from '../actions/types';

const initialState = {
	items : [], //This represents the post coming from our action (Since the FETCH request is in the action)
	item: {}
}

// This function evaluates what type we're dealing with
export default function(state = initialState, action){
	switch(action.type){ //Evaluting the action type
		case FETCH_POST:
			return { // Returning the current state
				...state,
				items: action.posts //Adding all posts to the items array
			}
		case FETCH_SINGLE_POST:
			return {
				...state,
				item: action.post
			}
		default:
			return state;
	}
}