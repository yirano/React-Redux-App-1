import { SHORTEN_URL, SHORTEN_URL_ERROR, SHORTEN_URL_SUCCESS, HANDLE_CHANGE } from "../Actions/actions";

const initialState = {
  url: '',
  data: [],
  fetchingURL: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHORTEN_URL:
      return {
        ...state, fetchingURL: true, error: ''
      }
    case SHORTEN_URL_SUCCESS:
      return {
        ...state, data: [...state.data, action.payload], fetchingURL: false, error: ''
      }
    case HANDLE_CHANGE:
      return {
        url: action.payload, ...state, error: ''
      }
    case SHORTEN_URL_ERROR:
      return {
        ...state, error: action.payload
      }
    default:
      return state
  }
}

export default reducer;