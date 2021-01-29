import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?results=75&nat=us,dk,fr,gb';

const API = () => {
    return axios.get(BASEURL)
}

export default API;