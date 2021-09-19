import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import ListMovie from "components/ListMovie";
import { useEffect } from "react";
import { newPage } from "actions/pagination";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "components/Pagination";
const CategoryMovie = (props) => {
  const { classes } = props;
  const { category, page } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    
      dispatch(newPage(category, page));
    
  }, [dispatch, category, page]);

  const pagination = useSelector((state) => state.pagination);
  const total = Math.ceil(pagination._totalRows / pagination._limit);
  let jumpPage = 0;
  if (page > pagination._ranges) {
    jumpPage = Math.floor(page / pagination._ranges);
  }
  let startPage = jumpPage === 0 ? 1 : pagination._ranges * jumpPage - 1;
  let endPage = pagination._ranges + jumpPage * pagination._ranges + 1;
  const totalPages = [];
  for (let i = startPage; i <= endPage; i++) {
    if (i <= total) {
      totalPages.push(i);
    }
  }
  return (
    <div className={classes.cateogory__page}>
      <ListMovie title={category} data={pagination.data} />
      <Pagination
        category={category}
        totalPage={totalPages}
        page={page ? page : 1}
        total = {total}
      />
    </div>
  );
};
CategoryMovie.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(CategoryMovie);
