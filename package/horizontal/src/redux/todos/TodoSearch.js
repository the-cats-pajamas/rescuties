import { FILTER_TODO, SET_VISIBILITY_FILTER_TODO } from '../constants';
const TodoSearch = (state = '', action) => {
	switch (action.type) {
		case FILTER_TODO:
			return action.payload
		case SET_VISIBILITY_FILTER_TODO:
			return state = ''
		default:
			return state
	}
}

export default TodoSearch;