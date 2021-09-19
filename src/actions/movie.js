import * as movieType from "constants/movie";
export const getAllMovie = () => {
  return {
    type: movieType.GET_ALL_MOVIE,
  };
};
export const getAllMovieSuccess = (data) => {
  return {
    type: movieType.GET_ALL_MOVIE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getAllMovieFailed = (error) => {
  return {
    type: movieType.GET_ALL_MOVIE_FAILED,
    payload: {
      error,
    },
  };
};
// 
export const getMovie = (category,nameMovie) => {
  return {
    type: movieType.GET_MOVIE,
    payload: {
      category,
      nameMovie
    }
  };
}
export const getMovieSuccess = (data) => {
  return {
    type: movieType.GET_MOVIE_SUCCESS,
    payload: {
      data
    }
  }
}
export const getMovieFailed = (error) => {
  return {
    type: movieType.GET_MOVIE_FAILED,
    payload: {
      error
    }
  }
}
//
export const getMovieSearch = (nameMovieSearch) => {
  return {
    type: movieType.GET_MOVIE_SEARCH,
    payload: {
      nameMovieSearch
    }
  };
}
export const getMovieSearchSuccess = (data) => {
  return {
    type: movieType.GET_MOVIE_SEARCH_SUCCESS,
    payload: {
      data
    }
  }
}
export const getMovieSearchFailed = (error) => {
  return {
    type: movieType.GET_MOVIE_SEARCH_FAILED,
    payload: {
      error
    }
  }
}
// 
export const getMovieRelativeSuccess = (data) => {
  return {
    type: movieType.GET_MOVIE_RELATIVE_SUCCESS,
    payload: {
      data
    }
  }
}
export const getMovieRelativeFailed = (error) => {
  return {
    type: movieType.GET_MOVIE_RELATIVE_FAILED,
    payload: {
      error
    }
  }
}
