import styled from "styled-components";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
const FooterIcon = styled.i`
  &:hover {
    color: ${(props) =>
      props.ui.darkMode ? props.ui.colorFooterLight : props.ui.colorFooterDark};
  }
`;
const FooterLink = styled.div`
  &:hover {
    color: ${(props) =>
      props.ui.darkMode ? props.ui.colorFooterLight : props.ui.colorFooterDark};
  }
`;
const Footer = (props) => {
  const { classes } = props;
  const ui = useSelector((state) => state.ui);
  return (
    <Grid
      container
      className={classes.footer}
      style={{
        backgroundColor: ui.darkMode ? ui.colorFooterDark : ui.colorFooterLight,
    
      }}
    >
      <Grid container item md={12} className={classes.footer__content}>
        <Grid item md={4} className={classes["footer__title-group"]}>
          <div className={classes.footer__title}>Quân film</div>
          <div className={classes.footer__subtitle}>
            Website xem phim miễn phí
          </div>
        </Grid>
        <Grid item md={4} className={classes["footer__link-group"]}>
          <FooterLink ui={ui} className={classes.footer__link}>
            Services
          </FooterLink>
          <FooterLink ui={ui} className={classes.footer__link}>
            Portfolio
          </FooterLink>
          <FooterLink ui={ui} className={classes.footer__link}>
            Contactme
          </FooterLink>
        </Grid>
        <Grid item md={4} className={classes.footer__icon}>
          <FooterIcon ui={ui} className="bx bxl-facebook"></FooterIcon>
          <FooterIcon ui={ui} className="bx bxl-instagram"></FooterIcon>
          <FooterIcon ui={ui} className="bx bxl-twitter"></FooterIcon>
          <FooterIcon ui={ui} className="bx bxl-youtube"></FooterIcon>
        </Grid>
      </Grid>
      <Grid container className={classes.copyright}>
        © Quân. All right reserved
      </Grid>
    </Grid>
  );
};
Footer.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Footer);
