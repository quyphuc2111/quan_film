import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import MovieItem from "components/MovieItem";
import anhtemp from './anhtemp.jpg'; 
const ListMovie = (props) => {
 
  const { classes, title, data } = props;
  const ui = useSelector((state) => state.ui);
  return (
    <Grid container className={classes.movie__body}>
      <Grid item md={10} className={classes.movie__content}>
        <h1
          style={{ color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark, marginBottom: 50, textTransform: "uppercase" }}
        >
          {title === "phimbo" ? "Phim Bộ" : title === "phimle" ? "Phim Lẻ": title === "phimchieurap" ? "Phim Chiếu Rạp" : title === "phimhoathinh" ? "Phim Hoạt Hình" : title}
        </h1>
        <Grid container>
          {data.map((item) => {
            return (
              <MovieItem
                key={item.title}
                img={anhtemp}
                titleMovie={item.title}
                category={title === "Phim bộ" ? "phimbo" : title === "Phim lẻ" ? "phimle": title === "Phim chiếu rạp" ? "phimchieurap" : title === "Phim hoạt hình" ? "phimhoathinh" : title}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
ListMovie.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.array,
};
export default withStyles(styles)(ListMovie);
