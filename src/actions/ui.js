import * as uiTypes from "constants/ui";
export const showLoading = () => {
   return {
       type: uiTypes.SHOW_LOADING,
   };
};
export const hideLoading = () => {
   return {
       type: uiTypes.HIDDEN_LOADING,
   };
};
export const darkMode = () => {
    return {
        type: uiTypes.DARK_MODE
    }
}
export const search = () => {
    return {
        type: uiTypes.SEARCH
    }
}
export const showLoadingSearch = () => {
    return {
        type: uiTypes.SHOW_LOADING_SEARCH
    }
}
export const hideLoadingSearch = () => {
    return {
        type: uiTypes.HIDDEN_LOADING_SEARCH
    }
}
