const styles = () => {
  return {
    movie__item_container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    img__movie: {
      borderRadius: "10px",
      width: "200px",
      height: "350px",
      objectFit: "cover",
      cursor: "pointer",
    },
    title__movie: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "center",
      marginBottom: "22px",
      width: "80%",
      "& > a": {
        color: "inherit",
        textDecoration: "none"
      },
    },
  };
};
export default styles;
