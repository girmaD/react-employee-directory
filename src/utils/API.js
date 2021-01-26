import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?results=';

const Search = (howMany) => {
    return axios.get(BASEURL + howMany)
}

export default Search;