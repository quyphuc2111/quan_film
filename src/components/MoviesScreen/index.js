import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
const MoviesRelative = (props) => {
  const { classes,url,title } = props;
  const ui = useSelector((state) => state.ui);
  return (
      <Grid item md={8} className={classes.movie}>
        <iframe
          allowFullScreen={true}
          src={url}
          frameBorder="0"
          title={title}
          loading = "eager"
        ></iframe>
        <h2
          className={classes.movie__title}
          style={{
            color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark,
          }}
        >
          {title}
        </h2>
      </Grid>
  );
};
MoviesRelative.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default withStyles(styles)(MoviesRelative);
