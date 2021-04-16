import axios from 'axios';

const initState = {
	popular: [],
	newGames: [],
	upcoming: [],
	searched: [],
};

const gameReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GAMES':
			return { ...state };
		default:
			return { ...state };
	}
};

//Action
const fetchGames = userData => {
	return {
		type: 'FETCH_GAMES',
		payload: userData,
	};
};

export default gameReducer;
