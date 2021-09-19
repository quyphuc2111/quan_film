import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Pagination = styled.div`
  a {
    color: ${(props) =>
      props.ui.darkMode ? props.ui.colorTextDark : props.ui.colorTextLight};
    background-color: ${(props) =>
      props.ui.darkMode ? props.ui.colorTextLight : props.ui.colorTextDark}};
    font-size: 0.8rem;
  }
`;
const Paginationn = (props) => {
  const { classes, category, totalPage, page,total } = props;
  const ui = useSelector((state) => state.ui);
  return (
    <Pagination ui={ui} className={classes.pagination}>
      <NavLink to={`/${category}/page=${+page - 1}`} activeClassName = {classes.pagination__active} className = {page<=1 ? classes.btn__pagination : ""}>
        <i className="bx bxs-chevron-left"></i>
      </NavLink>
      {totalPage.map((item) => {
        return (
          <NavLink key={item} to={`/${category}${page === 1 && item === page ? "" :  `/page=${item}`}`} activeClassName = {classes.pagination__active}>
            {item}
          </NavLink>
        );
      })}
      <NavLink to={`/${category}/page=${+page + 1}`} activeClassName = {classes.pagination__active} className = {page>= total ? classes.btn__pagination : ""}>
        <i className="bx bxs-chevron-right"></i>
      </NavLink>
    </Pagination>
  );
};
Paginationn.propTypes = {
  classes: PropTypes.object,
  category: PropTypes.string,
  totalPage: PropTypes.array,
  total: PropTypes.number,

};
export default withStyles(styles)(Paginationn);
