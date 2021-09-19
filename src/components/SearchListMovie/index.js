import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { search } from "actions/ui";
import { useDispatch } from "react-redux";
const SearchListMovie = (props) => {
  const dispatch = useDispatch();
  const { classes, film, category, title, totalEpisode, img } = props;
  return (
    <Grid container className={classes.movie__search_result} spacing={3}>
      <Grid item md={3} className={classes.img__movie_search}>
        <Link
          to={`/${film}/${title}/episode=1`}
          onClick={() => {
            dispatch(search());
          }}
        >
          <img src={img} alt="Đang load ảnh" />
        </Link>
      </Grid>
      <Grid item md={6} className={classes.movie__search_info}>
        <div>
          Phim:
          <Link
            to={`/${film}`}
            onClick={() => {
              dispatch(search());
            }}
          >
            Phim Bộ
          </Link>
        </div>
        <div>Thể loại: {category}</div>
        <div>{title}</div>
        <div>Tổng số tập: {totalEpisode}</div>
      </Grid>
    </Grid>
  );
};
SearchListMovie.propTypes = {
  classes: PropTypes.object,
  film: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  totalEpisode: PropTypes.number,
  img: PropTypes.string,
};

export default withStyles(styles)(SearchListMovie);
