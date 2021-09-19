const styles = () => {
  return {
   
    navbar: {
      height: "80px",
      position: "fixed",
      top: 0,
      zIndex: "9999",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 150px",
      "@media  (max-width: 1000px )": {
        padding: "0 15px",
      },
    },
    nav__menu: {
      "& > ul": {
        display: "flex",
        "& > li": {
          listStyle: "none",
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
          "& > a": {
            textDecoration: "none",
            fontWeight: "bold",
          },
          "& > i": {
            cursor: "pointer",
          },
        },
      },
    },
    menu__active: {
      color: "#6557de !important",
    },
      
  };
};
export default styles;
