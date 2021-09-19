import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MovieImg = styled.img`
  &:hover {
    filter: drop-shadow(
      3px 5px 20px
        ${(props) =>
          props.ui.darkMode ? props.ui.colorTextLight : props.ui.colorTextDark}
    );
  }
`;
const ListMovie = (props) => {
    const {classes,img,titleMovie,category} = props;
    const ui = useSelector((state) => state.ui);
    return (
      // lg={3} md = {4} sm={6} xs={12}
        <Grid item  className = {classes.movie__item_container}>
        <Link to = {`/${category}/${titleMovie}/episode=1`}>
            <MovieImg ui = {ui} src={img} className = {classes.img__movie} alt="Đang load ảnh"/>
        </Link>
        <h4 className = {classes.title__movie} style={{ color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark }}><Link to="/">{titleMovie}</Link></h4>
    </Grid>
    )
}
// const ListMovie = (props) => {
//   const { classes, img, titleMovie, category } = props;
//   const ui = useSelector((state) => state.ui);
//   return (
//     <Swiper
//       item
//       className={classes.movie__item_container}
//     >
//       <Link to={`/${category}/${titleMovie}/episode=1`}>
       
//           <MovieImg
//             ui={ui}
//             src={img}
//             className={classes.img__movie}
//             alt="Đang load ảnh"
//           />
        
//       </Link>
//       <h4
//         className={classes.title__movie}
//         style={{ color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark }}
//       >
//         <Link to="/">{titleMovie}</Link>
//       </h4>
//     </Swiper>
//   );
// };
ListMovie.propTypes = {
  classes: PropTypes.object,
  img: PropTypes.string,
  ui: PropTypes.object,
  titleMovie: PropTypes.string,
  category: PropTypes.string,
};
export default withStyles(styles)(ListMovie);
