import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
const Banner = (props) => {
  const { classes } = props;
  const ui = useSelector((state) => state.ui);
  return (
    <Grid container className={classes.banner}>
      <Grid item md={3} className={classes.banner__icon}>
        <i className="bx bxl-instagram"></i>
        <i className="bx bxl-github"></i>
        <i className="bx bxl-facebook"></i>
      </Grid>
      <Grid item md={9} className={classes.banner__content}>
        <h1
          className={classes.banner__title}
          style={{ color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark }}
        >
          Quân Film
        </h1>
        <h4 className={classes.banner__subtitle}>Website xem phim miễn phí</h4>
        <span className={classes.banner__sub}>
          Xem phim miễn phí trên các nền tản khác nhau. Xem phim online chất
          lượng cao tại QUÂN FILM
        </span>
        <button className={classes.watch__now}>Xem phim</button>
        <div className={classes["home__scroll-button"]}>
          <i className="bx bx-mouse"></i>
          <div className={classes.scroll__title}>
            <div
              style={{
                color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark,
              }}
            >
              Scroll dow
            </div>
            <i className="bx bx-down-arrow-alt"></i>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
Banner.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Banner);
