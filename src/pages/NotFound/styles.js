const styles = () => {
  return {
    notFoud_page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: "100px"
    },
    notFoud_page_body: {
      "& > h1": {
        textAlign: "center",
        margin: "30px 15px",
        fontFamily: "'Balsamiq Sans', cursive",
        fontSize: "2rem"
      },
    },
    "error-container": {
      textAlign: "center",
      fontSize: "106px",
      fontFamily: "'Catamaran', sans-serif",
      fontWeight: "800",
      margin: "70px 15px",
      "& > span": {
        display: "inline-block",
        position: "relative",
      },
    },
    four: {
      width: "136px",
      height: "43px",
      borderRadius: "999px",
      background: ` 
        linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),
        linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),
        linear-gradient(to right, #d89ca4, #e27b7e)`,
      "&:before,&:after": {
        content: "''",
        display: "block",
        position: "absolute",
        borderRadius: "999px",
      },
      "&:before": {
        width: "43px",
        height: "156px",
        left: "60px",
        bottom: "-43px",
        background: `linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),
          linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),
          linear-gradient(to top, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F)`,
      },
      "&:after": {
        width: "137px",
        height: "43px",
        transform: "rotate(-49.5deg)",
        left: "-18px",
        bottom: "36px",
        background:
          "linear-gradient(to right, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F)",
      },
    },
    zero: {
      verticalAlign: "text-top",
      width: "156px",
      height: "156px",
      borderRadius: "999px",
      background: `linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%,  transparent 51%, transparent 100%),
    linear-gradient(to top right, #99749D, #99749D, #B895AB, #CC9AA6, #D7969E, #ED8687, #ED8687)`,
      overflow: "hidden",
      animation: "$bgshadow 5s infinite",
      "&:before": {
        content: "''",
        display: "block",
        position: "absolute",
        transform: "rotate(45deg)",
        width: "90px",
        height: "90px",
        backgroundColor: "transparent",
        left: "0px",
        bottom: "0px",
        background: `linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%),
          linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%)`,
      },
      "&:after": {
        content: "''",
        display: "block",
        position: "absolute",
        borderRadius: "999px",
        width: "70px",
        height: "70px",
        left: "43px",
        bottom: "43px",
        background: "#FDFAF5",
        boxShadow: " -2px 2px 2px 0px rgba(0, 0, 0, 0.1)",
      },
    },
    "@keyframes bgshadow": {
      "0%": {
        boxShadow: "inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4)",
      },
      "45%": {
        boxShadow: "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
      },
      "55%": {
        boxShadow: "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
      },
      "100%": {
        boxShadow: "inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4)",
      },
    },
    "screen-reader-text": {
      position: "absolute",
      top: "-9999em",
      left: "-9999em",
    },
    "link-container": {
      textAlign: "center",
    },
    "more-link": {
      textTransform: "uppercase",
      fontSize: "13px",
      backgroundColor: "#de7e85",
      padding: "10px 15px",
      borderRadius: "0",
      color: "#fff",
      display: "inline-block",
      marginRight: "5px",
      marginBottom: "5px",
      lineHeight: "1.5",
      textDecoration: "none",
      marginTop: "50px",
      letterSpacing: "1px",
    },
    "zoom-area": {
        "& > div": {
            textAlign: "center",
            marginTop: "8px",
            fontSize: "1.4rem",
            fontWeight: "800",
            fontFamily: "'Balsamiq Sans', cursive",
            
        }
    }
  };
};
export default styles;
