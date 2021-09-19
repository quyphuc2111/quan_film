
import { useEffect, useCallback } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { useState } from "react";
export const ScrollButton = (props) => {
  const { classes } = props;
  const [visible, setVisible] = useState(false)
  const toggleVisible = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true)
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  }, [setVisible]);
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.addEventListener("scroll", toggleVisible);
    };
  }, [toggleVisible]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
    onClick={scrollToTop}
      className={`${classes.scroll__up} ${
        visible ? classes.visible : classes.hidden
      }`}
    >
      <i className="bx bx-up-arrow-alt"></i>
    </div>
  );
};
ScrollButton.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(ScrollButton);
