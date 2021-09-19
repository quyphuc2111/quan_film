import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import ListMovie from "components/ListMovie";
import { useEffect } from "react";
import {getAllMovie} from "actions/movie";
import { useSelector,useDispatch } from "react-redux";
const Home = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovie())
    },[dispatch])
    const dataMovie = useSelector(state => state.movie.movie);
    const {classes} = props;
    return (
        <div className= {classes.home__page}>
            {
                dataMovie.map((item) => {
                    return (
                        <ListMovie key = {item.title} title = {item.title} data = {item.data}/>
                    );
                })
            }
            
        </div>
    )
}
Home.propTypes = {
    classes: PropTypes.object,
}
export default withStyles(styles)(Home);
