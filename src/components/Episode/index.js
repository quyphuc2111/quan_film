import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
const Episode = (props) => {
  const { classes, episodeData, category, nameMovie } = props;
  const ui = useSelector((state) => state.ui);

  return (
    <Grid item md={8} className={classes.episode}>
      {episodeData.length !== 0
        ? episodeData[0].episode.map((item, index) => {
            return (
              <NavLink
                key={`tap_${index}`}
                activeClassName={classes.selected}
                style={{
                  color: ui.darkMode ? ui.colorTextDark : ui.colorTextLight,
                  background: ui.darkMode ? ui.colorBgLight : ui.colorBgDark,
                }}
                to={`/${category}/${nameMovie}/episode=${index + 1}`}
              >
                {index + 1}
              </NavLink>
            );
          })
        : ""}
    </Grid>
  );
};
Episode.propTypes = {
  classes: PropTypes.object,
  episodeData: PropTypes.array,
  category: PropTypes.string,
  nameMovie: PropTypes.string,
};

export default withStyles(styles)(Episode);
