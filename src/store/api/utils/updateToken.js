import { getToken, setToken } from "../../actions/auth/auth";
import jwtDecode from "jwt-decode";
import postData from "../postData";

async function isActive() {
    const token = getToken();
    if(token) {
        try {
            const decoded = jwtDecode(token);
            const { exp } = decoded;
            if(!exp)
                return false;
            if (Date.now() >= exp * 1000) {
                return false;
            }
            return true;
        } catch (err) {
            return false;
        }
    }
    return true;
}

async function updateToken() {
    const active = await isActive();
    if(!active) {
        const response = await postData("clients/crm/refresh", null, {
            withCredentials: true,
        });
        const accessToken = response?.access_token;
        accessToken &&
            setToken(accessToken);
    }
    return true;
}

export default updateToken;
