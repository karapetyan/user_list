const URL = 'http://SOME_URL/api/';
const APIKEY = 'SOME_KEY';

const fetchUsers = (searchTerm, searchPage) => { 
    return fetch(`${URL}users?page=${searchPage}&searchTerm=${searchTerm}&key=${APIKEY}`)
        .then(response => {
            if (response.status !== 200) throw ('Looks like there was a problem. Status Code: ' + response.status);
            return response.json()
        })
        .then(json => {
            return ({
                list: json.result,
                nextPageUrl: json.nextPageUrl,
                previousPageUrl: json.previousPageUrl,
                currentPage: searchPage
            })
        })
        .catch(error => {
            throw(error);    
        })
}

export default fetchUsers;