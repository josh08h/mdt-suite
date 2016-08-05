import initialState from '../store/initialState';
import * as ActionTypes from '../actionTypes/authActionTypes';

const authReducer = function authReducer(state = initialState.auth, action){
	switch (action.type){
		case ActionTypes.LOGIN_REQUEST:
			return Object.assign({}, state, {
				isLoggingIn: true,
				isLoggedIn: false
			});
		default:
			return state;
	}
}

export default authReducer;