const styles = () => {
  return {
   
    footer: {
      padding: "65px 0",
      marginTop: "30px",
    },
    "footer__content": {
      alignItems: "center",

      "@media  (max-width: 600px )": {
        flexDirection: "column",
        alignItems: "center",
      },
      "@media  (max-width: 1000px )": {
        justifyContent: "center",
     
      },
    },
    "footer__title-group": {
      alignItems: "flex-end",
      flexDirection: "column",
      display: "flex",
      "@media  (max-width: 600px )": {
        alignItems: "center",
        
      },
    },
    "footer__link-group": {
      display: "flex",
      justifyContent: "space-around",
    },
    footer__title: {
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "bolder",
      fontSize: "3rem",
    },
    footer__subtitle: {
      color: " #fff",
    },
    footer__link: {
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1.1rem",
      padding:" 0 10px",
      "@media  (max-width: 600px )": {
        padding: "10px 15px",
      },
    },
    footer__icon: {
      display: "flex",
      justifyContent: "flex-start",
      color: "#fff",
      "& > i": {
        padding: "0 10px",
        fontSize: " 1.5rem",
        cursor: "pointer",
      },
    },
    copyright: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      paddingTop: "50px",
    },
  };
};
export default styles;
