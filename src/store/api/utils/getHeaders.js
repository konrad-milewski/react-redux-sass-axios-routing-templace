import getWssConnectionId from "../../actions/communication/getWssConnectionId";
import { getCustomHeaders, getToken } from "../../actions/auth/auth";


function getHeaders() {
    const customHeaders = getCustomHeaders() || {};
    const headers = {
        'Accept': 'application/json',
        'X-Client': 'CRM',
        'Content-Type': 'application/json',
        'Accept-Language': 'pl,en-US;q=0.7,en;q=0.3',
        'Authorization': `Bearer ${getToken()}`,
        'withCredentials': true,
        'WSS-ID': getWssConnectionId(),
        ...customHeaders
    }

    return headers;
}

export default getHeaders;