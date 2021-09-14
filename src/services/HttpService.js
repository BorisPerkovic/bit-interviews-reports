class HttpService {
    get(url, parms = {}){
        return fetch(url, {
            method: 'GET',
            Authorization: TokenService.get(),
            ...params
        }).then(res => res.json())
        .catch((message) => {throw new Error(message)});
    }
    post(){}
    delete(){}
}