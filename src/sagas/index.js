import * as movieTypes from "constants/movie";
import * as paginationTypes from "constants/pagination";
import { takeLatest, call, all, put, select, delay } from "redux-saga/effects";
import movieApi from "apis/movieApi";
import {
  showLoading,
  hideLoading,
  showLoadingSearch,
  hideLoadingSearch,
} from "actions/ui";
import {
  getAllMovieSuccess,
  getAllMovieFailed,
  getMovieSuccess,
  getMovieFailed,
  getMovieSearchSuccess,
  getMovieSearchFailed,
  getMovieRelativeSuccess,
  getMovieRelativeFailed,
} from "actions/movie";
import { getNewPageSuccess, getNewPageFailed } from "actions/pagination";
function* getAllDataMovie() {
  yield put(showLoading());
  const params = {
    _page: 1,
    _limit: 20,
  };
  const { phimbo, phimle, phimhoathinh, phimchieurap } = yield all({
    phimbo: call(movieApi.getPhimCategory, "phimbo", params),
    phimle: call(movieApi.getPhimCategory, "phimle", params),
    phimhoathinh: call(movieApi.getPhimCategory, "phimhoathinh", params),
    phimchieurap: call(movieApi.getPhimCategory, "phimchieurap", params),
  });
  if (phimbo && phimle && phimhoathinh && phimchieurap) {
    const data = [
      {
        title: "Phim bộ",
        data: phimbo.data,
      },
      {
        title: "Phim lẻ",
        data: phimle.data,
      },
      {
        title: "Phim hoạt hình",
        data: phimhoathinh.data,
      },
      {
        title: "Phim chiếu rạp",
        data: phimchieurap.data,
      },
    ];
    yield put(getAllMovieSuccess(data));
  } else {
    yield put(getAllMovieFailed("Lỗi"));
  }
  yield delay(500);
  yield put(hideLoading());
}
function* getDataPage({ payload }) {
  const { category, page } = payload;
  yield put(showLoading());
  const paramsInfo = yield select((state) => state.pagination);
  const params = {
    _page: +page,
    _limit: paramsInfo._limit,
  };
  const resp = yield call(movieApi.getMovie, category, params);
  if (resp.data) {
    yield put(
      getNewPageSuccess(
        resp.pagination._page,
        resp.pagination._totalRows,
        resp.data
      )
    );
  } else {
    yield put(getNewPageFailed("Lỗi"));
  }
  yield delay(500);
  yield put(hideLoading());
}
function* getMovieData({ payload }) {
  const { category, nameMovie } = payload;
  yield put(showLoading());
  const resp = yield call(movieApi.getMovieMain, category, "");
  const response = resp.filter(item => item.title === nameMovie);
  const responseFilter = resp.filter(item => item.title !== nameMovie);
  const res = responseFilter.slice(0,15);
  if (resp) {
    yield put(getMovieSuccess(response));
    yield put(getMovieRelativeSuccess(res));
  } else {
    yield put(getMovieFailed("Lỗi"));
    yield put(getMovieRelativeFailed("Lỗi"));
  }
  yield delay(500);
  yield put(hideLoading());
}
function* getMovieSearchData({ payload }) {
  const { nameMovieSearch } = payload;
  if (nameMovieSearch !== "" && nameMovieSearch.length > 2) {
    yield delay(500);
    yield put(showLoadingSearch());
    const { phimbo, phimle, phimhoathinh, phimchieurap } = yield all({
      phimbo: call(movieApi.getMovieMain, "phimbo", nameMovieSearch.trim()),
      phimle: call(movieApi.getMovieMain, "phimle", nameMovieSearch.trim()),
      phimhoathinh: call(
        movieApi.getMovieMain,
        "phimhoathinh",
        nameMovieSearch.trim()
      ),
      phimchieurap: call(
        movieApi.getMovieMain,
        "phimchieurap",
        nameMovieSearch.trim()
      ),
    });
    if (phimbo && phimle && phimhoathinh && phimchieurap) {
      const data = [
        {
          category: "phimbo",
          data: phimbo,
        },
        {
          category: "phimle",
          data: phimle,
        },
        {
          category: "phimhoathinh",
          data: phimhoathinh,
        },
        {
          category: "phimchieurap",
          data: phimchieurap,
        },
      ];
      yield put(getMovieSearchSuccess(data));
    } else {
      yield put(getMovieSearchFailed("Lỗi"));
    }
    yield delay(500);
    yield put(hideLoadingSearch());
  }else{
    yield put(getMovieSearchSuccess([]));
    yield delay(500);
    yield put(hideLoadingSearch());
  }
  
}
function* rootSaga() {
  yield takeLatest(movieTypes.GET_ALL_MOVIE, getAllDataMovie);
  yield takeLatest(paginationTypes.GET_NEW_PAGE, getDataPage);
  yield takeLatest(movieTypes.GET_MOVIE, getMovieData);
  yield takeLatest(movieTypes.GET_MOVIE_SEARCH, getMovieSearchData);
}
export default rootSaga;
