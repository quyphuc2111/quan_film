const styles = () => {
  return {
    episode: {
      display: "flex",
      flexWrap: "wrap",
      "& > a": {
        height: "35px",
        width: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: " 5px 5px",
        borderRadius: "50%",
        textDecoration: "none"
      },
    },
    selected: {
      backgroundColor: "#5A43CB !important",
      color: "#fff !important",
    },
  };
};
export default styles;
