import axios from 'axios';

export const fetchShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(fetched => {
            console.log('fetchShow axios fetched.data', fetched.data);
            return fetched; //I originally had return fetched.data, but had to remove .data to fix an error
        })
        .catch(error => {
            return 'Error fetching from axios call in fetchShow';
        })
};