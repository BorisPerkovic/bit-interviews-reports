import { BASE_URL } from "../constants/endpoints";

class CandidatesCommunicator {
    url = `${BASE_URL}/candidates`;
    fetchAll(){
        return HttpService.get(url)
        .then(rawCand => rawCand.map(c => c))
    }
    create(obj){
        return HttpService.post(url, paramsm, body).then()
    }
    delete(){
        return fetch()
    }
}

export const f = () => ();