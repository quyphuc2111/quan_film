import * as types from "constants/movie";
const initialState = {
  movie: [],
  movieMain: [],
  movieSearch: [],
  moviesRelative: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload.data,
      };
    case types.GET_ALL_MOVIE_FAILED:
      return {
        ...state,
      };
    case types.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movieMain: action.payload.data,
      };
    case types.GET_MOVIE_FAILED:
      return {
        ...state,
      };
    case types.GET_MOVIE_SEARCH_SUCCESS:
      return {
        ...state,
        movieSearch: action.payload.data,
      };
    case types.GET_MOVIE_SEARCH_FAILED:
      return {
        ...state,
      };
    case types.GET_MOVIE_RELATIVE_SUCCESS:
      return {
        ...state,
        moviesRelative: action.payload.data,
      };
    case types.GET_MOVIE_RELATIVE_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
