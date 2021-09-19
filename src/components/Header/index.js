import styles from "./styles";
import "./nav_mobile.scss";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { darkMode, search } from "actions/ui";
import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import useViewport from "hooks/useViewport";

const NavMenu = styled.li`
  a {
    color: ${(props) =>
      props.ui.darkMode ? props.ui.colorTextLight : props.ui.colorTextDark};
  }
  i {
    color: ${(props) =>
      props.ui.darkMode ? props.ui.colorTextLight : props.ui.colorTextDark};
  }
`;
const Brand = styled.div`
  color: ${(props) =>
    props.ui.darkMode ? props.ui.colorTextLight : props.ui.colorTextDark};
  @media  (max-width: 1000px ) {
      font-size: 20px;
      font-weight: bolder;
  }
`;
const Navbar = styled(Grid)`
  background-color: ${(props) =>
    props.ui.darkMode
      ? props.togglenavbar
        ? "rgb(42, 39, 61)"
        : ""
      : props.togglenavbar
      ? "white"
      : ""};
  box-shadow: ${(props) =>
    props.togglenavbar
      ? "0 -1px 4px rgb(0 0 0 / 15%)"
      : "0 -1px 4px rgb(1 1 1 / 15%)"};
`;
const Header = (props) => {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1000;

  const { classes } = props;
  const ui = useSelector((state) => state.ui);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const dispatch = useDispatch();
  const toggleNavbarHeader = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1) {
      setToggleNavbar(true);
    } else if (scrolled === 0) {
      setToggleNavbar(false);
    }
  }, [setToggleNavbar]);
  useEffect(() => {
    window.addEventListener("scroll", toggleNavbarHeader);
    return () => {
      window.addEventListener("scroll", toggleNavbarHeader);
    };
  }, [toggleNavbarHeader]);

  useEffect(() => {
    const toggle = document.querySelectorAll(".toggle")[0];
    const nav = document.querySelectorAll("nav")[0];
    const toggle_open_text = "Menu";
    const toggle_close_text = "Close";
    if(isMobile) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        
        if (nav.classList.contains('open')) {
          toggle.innerHTML = toggle_close_text;
        } else {
          toggle.innerHTML = toggle_open_text;
        }
      }, false);
      setTimeout(function () {
        nav.classList.toggle("open");
      }, 800);
    }

   
  }, [isMobile]);
  return (
    <Navbar
      ui={ui}
      togglenavbar={toggleNavbar ? toggleNavbar.toString() : undefined}
      container
      className={classes.navbar}
    >
      <Brand ui={ui} className={classes.brand}>
        Quân Phim
      </Brand>
      {isMobile ? (
        <div className={`${classes.nav__menu} `}>
          <nav className="top-right open">
            <NavLink to="/" exact className="disc l1">
              {" "}
              <div>Home</div>
            </NavLink>

            <NavLink to="/phimbo" className="disc l2">
              {" "}
              <div>Phim bộ</div>
            </NavLink>

            <NavLink to="/phimle" className="disc l3">
              {" "}
              <div> Phim Lẻ</div>
            </NavLink>

            <NavLink to="/phimhoathinh" className="disc l4">
              {" "}
              <div>Phim H Hình</div>
            </NavLink>

            <NavLink to="/phimchieurap" className="disc l5 ">
              {" "}
              <div> Phim Rạp</div>
            </NavLink>
            <NavLink to="/" exact className="disc l6 toggle">
              {" "}
               Menu
            </NavLink>
          </nav>
        </div>
      ) : (
        <div className={`${classes.nav__menu}`}>
          <ul>
            <NavMenu ui={ui}>
              <NavLink to="/" exact activeClassName={classes.menu__active}>
                Home
              </NavLink>
            </NavMenu>
            <NavMenu ui={ui}>
              <NavLink to="/phimbo" activeClassName={classes.menu__active}>
                Phim Bộ
              </NavLink>
            </NavMenu>
            <NavMenu ui={ui}>
              <NavLink to="/phimle" activeClassName={classes.menu__active}>
                Phim Lẻ
              </NavLink>
            </NavMenu>
            <NavMenu ui={ui}>
              <NavLink
                to="/phimhoathinh"
                activeClassName={classes.menu__active}
              >
                Phim Hoạt Hình
              </NavLink>
            </NavMenu>
            <NavMenu ui={ui}>
              <NavLink
                to="/phimchieurap"
                activeClassName={classes.menu__active}
              >
                Phim Chiếu Rạp
              </NavLink>
            </NavMenu>
            <NavMenu
              ui={ui}
              onClick={() => {
                dispatch(darkMode());
              }}
            >
              <i className={ui.darkMode ? "bx bx-moon" : "bx bx-sun"}></i>
            </NavMenu>
            <NavMenu
              ui={ui}
              onClick={() => {
                dispatch(search());
              }}
            >
              <i className="bx bx-search"></i>
            </NavMenu>
          </ul>
        </div>
      )}
    </Navbar>
  );
};
Header.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Header);
