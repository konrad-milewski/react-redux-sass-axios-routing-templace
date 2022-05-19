import types from './types';

const INITIAL_STATE = {
	token: null,
	headers: {},
	user: {
		id: '12345657'
	}
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SETUSERDATA: {
			return {
				...state, user: action.item
			}
		}
		case types.SETUSERID: {
			return {
				...state, user: { id: action.item }
			}
		}
		case types.SETTOKEN: {
			return {
				...state, token: action.item,
			};
		}
		case types.SETHEADERS: {
			return {
				...state, headers: action.item,
			}
		}
		case types.ADDHEADER: {
			return {
				...state, headers: { ...state.headers, [action.id]: action.value },
			};
		}
		case types.REMOVEHEADER: {
			let headersObj = state.headers;
			delete headersObj[action.id];
			return {
				...state, headers: headersObj,
			};
		}
		default:
			return state;
	}
};

export default authReducer;
