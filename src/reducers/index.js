import {combineReducers} from 'redux';
import ui from "reducers/uiReducer";
import movie from "reducers/movieReducer";
import pagination from "reducers/pagination";
const rootReducer = combineReducers({
    ui,
    movie,
    pagination,
});
export default rootReducer;