const styles = () => {
  return {
    movie__search_result: {
      margin: "15px 0",
    },
    img__movie_search: {
      "& > a": {
        "& > img": {
          maxWidth: "100%",
          borderRadius: "10px",
        },
      },
    },
    movie__search_info: {
      "& > div": {
        paddingBottom: "12px",
        fontSize: "1.1rem",
        "& > a": {
            textDecoration: "none",
            fontWeight: "bold",
        }
      },
    },
  };
};
export default styles;
