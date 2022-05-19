import types from './types';

const removeHeader = (id) => ({
    type: types.REMOVEHEADER, id,
})

const setUserData = (item) => ({
    type: types.SETUSERDATA, item,
})

const setHeaders = (item) => ({
    type: types.SETHEADERS, item,
});

const addHeader = (id, value) => ({
    type: types.ADDHEADER, id, value,
});

const setUserID = (item) => ({
    type: types.SETUSERID, item,
})

const setToken = (item) => ({
    type: types.SETTOKEN, item,
});

const actions = {
    removeHeader,
    setUserData,
    setHeaders,
    addHeader,
    setUserID,
    setToken,
};

export default actions;
