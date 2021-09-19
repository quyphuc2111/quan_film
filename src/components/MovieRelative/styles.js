const styles = () => {
  return {
    swiper__content: {
      marginTop: 50,
      marginBottom: 100,
      "& > h1": {
        textTransform: "uppercase", 
        textAlign: "center"
      },
    },
    movie__swiper: {
      paddingTop: "15px",
      "& > a": {
        display: "flex",
        justifyContent: "center",
        "& > img": {
          borderRadius: "10px",
          width: "180px",
          height: "320px",
          objectFit: "cover",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          },
        },
      },
    },
    movie__swiper_title: {
      marginTop: "15px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "center",
      width: "80%",
      padding: "0 15px"
    },
  };
};
export default styles;
