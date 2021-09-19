import * as paginationTypes from "constants/pagination";
export const newPage = (category,page) => {
   return {
       type: paginationTypes.GET_NEW_PAGE,
       payload: {
           category: category,
           page: page
       }
   };
};
export const getNewPageSuccess = (page,totalRows,data) => {
    return {
        type: paginationTypes.GET_NEW_PAGE_SUCCESS,
        payload: {
            page,
            totalRows,
            data
        },
    };
};
export const getNewPageFailed = (error) => {
    return {
        type: paginationTypes.GET_NEW_PAGE_FAILED,
        payload: error,
    };
}