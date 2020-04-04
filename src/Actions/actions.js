import axios from 'axios'

export const SHORTEN_URL = 'SHORTEN_URL'
export const SHORTEN_URL_SUCCESS = 'SHORTEN_URL_SUCCESS'
export const SHORTEN_URL_ERROR = 'SHORTEN_URL_ERROR'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'

export const shortenURL = (url) => {
  const promise = axios.post("https://rel.ink/api/links/", { "url": url })
  return dispatch => {
    dispatch({ type: SHORTEN_URL })
    promise
      .then(res => {
        console.log(res);
        dispatch({ type: SHORTEN_URL_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: SHORTEN_URL_ERROR, payload: err })
      })
  }

}


