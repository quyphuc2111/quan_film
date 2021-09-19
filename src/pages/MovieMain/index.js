import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getMovie } from "actions/movie";
import MoviesScreen from "components/MoviesScreen";
import Episode from "components/Episode";
import { Grid } from "@material-ui/core";
import MovieRelative from "components/MovieRelative";
import NotFound from "pages/NotFound";
const MovieMain = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const { category, nameMovie, episode } = useParams();
  useEffect(() => {
    dispatch(getMovie(category, nameMovie));
  }, [dispatch, category, nameMovie]);
  const data = useSelector((state) => state.movie.movieMain);
  const checkData = data.length !== 0 ? data[0].episode.length : "";
  return (
    <>
      {checkData === 0 ? (
        <NotFound/>
      ) : episode > checkData || +episode - 1 < 0 ? (
        <NotFound/>
      ) : (
        <Grid container className={classes.main__movie}>
          <MoviesScreen
            url={data.length !== 0 ? data[0].episode[+episode - 1].url : ""}
            title={data.length !== 0 ? data[0].title : ""}
          />
          <Episode
            episodeData={data.length !== 0 ? data : ""}
            category={category}
            nameMovie={nameMovie}
          />
          <MovieRelative/>
        </Grid>
      )}
    </>
  );
};
MovieMain.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MovieMain);
