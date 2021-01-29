import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const searchGifs = (searchTerm) => {
    return ((dispatch) => {
        dispatch({type: FETCH_START});

        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=eF68i1SpJhoVnYQRTDKYcXdtpZlGeJDP&q=${searchTerm}`)
            .then(resp=>{
                dispatch({type: FETCH_SUCCESS, payload:resp.data.data});
            })
            .catch(err=>{
                dispatch({type: FETCH_FAIL, payload: err.message});
            })
    });
}
