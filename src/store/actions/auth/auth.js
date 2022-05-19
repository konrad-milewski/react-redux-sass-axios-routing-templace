import store from '../../store';

function getCustomHeaders() {
	const headers = store.getState()?.auth?.headers || null;
	return headers;
}

function getToken() {
	const token = store.getState()?.auth?.token || null;
	return token;
}

function getUserID() {
	const token = store.getState()?.auth?.user?.id || null;
	return token;
}

function setToken(token) {
	store.getState().auth.token = token;
	return token;
}

export { 
    getCustomHeaders,
    getUserID,
    getToken,
    setToken,
};
