import * as types from "constants/pagination";
const initialState = {
  _page: 1,
  _limit: 20,
  _totalRows: 1,
  _ranges: 1,
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEW_PAGE_SUCCESS:
      return {
        ...state,
        _page: action.payload.page,
        _totalRows: action.payload.totalRows,
        data: action.payload.data
      };
    case types.GET_NEW_PAGE_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
