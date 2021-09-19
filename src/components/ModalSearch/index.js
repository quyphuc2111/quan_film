import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { getMovieSearch } from "actions/movie";
import { search } from "actions/ui";
import SearchListMovie from "components/SearchListMovie";
import LoadingSearch from "components/LoadingSearch";
const ModalSearch = (props) => {
  const dispatch = useDispatch();
  const { classes } = props;
  const ui = useSelector((state) => state.ui);
  const data = useSelector((state) => state.movie.movieSearch);
  const [value, setValue] = useState("");
  const getSearch = (e) => {
    setValue(e.target.value);
    dispatch(getMovieSearch(e.target.value));
  };
  let dataMovieSearch = [];
  let totalMovieSearch = 0;
  data.forEach((item) => {
    if (item.data.length > 0) {
      totalMovieSearch += item.data.length;
      let category = item.category;
      item.data.forEach((item) => {
        item.film = category;
      });
      dataMovieSearch = dataMovieSearch.concat(item.data);
    }
  });
  return (
    <Grid
      container
      className={classes.modal__search}
      style={{ display: ui.search ? "flex" : "none" }}
    >
      <Grid item md={10} className={classes.modal__content}>
        <i
          className="bx bx-x"
          onClick={() => {
            dispatch(search());
            setValue("");
          }}
        ></i>
        <div className={classes["input-wrapper"]}>
          <input
            onChange={getSearch}
            placeholder="Nhập phim bạn muốn tìm..."
            value={value}
            spellCheck={false}
          />
          <span className={classes["input-highlight"]}>
            {value.replace(/ /g, "\u00a0")}
          </span>
        </div>
        <Grid container item md={11} className={classes.movie__search_section}>
          {ui.loadingSearch ? (
            <LoadingSearch />
          ) : value === "" ? (<span style = {{fontSize: "1.5rem",fontWeight: "bold"}}>Hãy tìm kiếm gì đó đi 😄</span>) : dataMovieSearch.length === 0 && value !== "" ? (<span style = {{fontSize: "1.5rem",fontWeight: "bold"}}>Không tìm thấy kết quả của bạn 😅</span>) :  (
            <>
              <h1>Bạn có {totalMovieSearch} kết quả 😍</h1>
              {dataMovieSearch.map((item,index) => {
                return (
                  <SearchListMovie
                    key={`phim_${index}`}
                    img={item.imageUrl}
                    film={item.film}
                    category={item.category}
                    title={item.title}
                    totalEpisode={item.episode.length}
                  />
                );
              })}
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
ModalSearch.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ModalSearch);
