import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
const NotFound = (props) => {
  const { classes } = props;
  const ui = useSelector((state) => state.ui);
  return (
    <Grid container className= {classes.notFoud_page}>
      <Grid item md={10} className = {classes.notFoud_page_body}>
        <h1 style = {{color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark}}>404 Error Page</h1>
        <section className={classes["error-container"]}>
          <span className={classes["four"]}>
            <span className={classes["screen-reader-text"]}>4</span>
          </span>
          <span className={classes["zero"]}>
            <span className={classes["screen-reader-text"]}>0</span>
          </span>
          <span className={classes["four"]}>
            <span className={classes["screen-reader-text"]}>4</span>
          </span>
        </section>
        <div className={classes["zoom-area"]}>
           <div style = {{color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark}}>Look like you're lost</div>
           <div style = {{color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark}}>the page you are looking for not avaible!</div>
        </div>
        <div className={classes["link-container"]}>
          <Link to="/" className={classes["more-link"]}>
            Back to home page
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};
NotFound.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(NotFound);
