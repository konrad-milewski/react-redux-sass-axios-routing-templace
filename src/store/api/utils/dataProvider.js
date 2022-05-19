function dataProvider(response) {
    if (response?.data)
        return response.data;
    return {};
}

export default dataProvider;