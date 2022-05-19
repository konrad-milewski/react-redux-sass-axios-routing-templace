function errorProvider({ response }) {
    if (response) {
        console.error(
            {
                status: response.status,
                statusText: response.statusText,
                data: response.data,
                url: response.config?.url,
                method: response.config?.method,
                headers: response.config?.headers,
            });
        return {
            status: response.status,
            data: response.data
        }
    }
}

export default errorProvider;