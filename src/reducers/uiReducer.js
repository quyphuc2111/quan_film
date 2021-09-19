import * as types from "constants/ui";
const initialState = {
  showLoading: false,
  colorTextLight: "#fff",
  colorBgLight: "#fff",
  colorTextDark: "#333",
  colorBgDark: "#191627",
  darkMode: true,
  colorFooterLight: "#6E57E0",
  colorFooterDark: "#100E1B",
  colorHoverFooter: "gray",
  search: false,
  toggleNavbar: false,
  scrollButton: false,
  loadingSearch: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case types.HIDDEN_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    case types.DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case types.SEARCH:
      return {
        ...state,
        search: !state.search,
      };
    case types.SHOW_LOADING_SEARCH:
      return {
        ...state,
        loadingSearch: true,
      };
    case types.HIDDEN_LOADING_SEARCH:
      return {
        ...state,
        loadingSearch: false,
      };
    default:
      return state;
  }
};
export default reducer;
