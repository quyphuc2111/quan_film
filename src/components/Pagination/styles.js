const styles = () => {
  return {
    pagination: {
      marginTop: "40px",
      display: "flex",
      justifyContent: "center",
      "& > a": {
        height: "35px",
        width: "35px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        margin: "0 5px",
        fontWeight: "700",
        "&:hover": {
          backgroundColor: "#5a43cb !important",
          color: "#fff !important",
        },
        "&:first-child": {
          fontSize: "1rem",
        },
        "&:last-child": {
          fontSize: "1rem",
        }
      },
    },
    pagination__active: {
      backgroundColor: "#5a43cb !important",
      color: "#fff !important",
    },
    btn__pagination: {
      display: "none !important",
    }
  };
};
export default styles;
