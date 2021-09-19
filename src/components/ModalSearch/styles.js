const styles = () => {
  return {
    modal__search: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      top: "0px",
      right: "0px",
      left: "0px",
      bottom: "0px",
      zIndex: "9999999",
      justifyContent: "center",
      alignItems: "center",
      animation: `$modalSearch 0.5s ease-in-out`,
    },
    modal__content: {
      backgroundColor: "#fff",
      animation: `$modalSearchShow 0.5s ease-in-out`,
      maxHeight: "90vh",
      height: "90vh",
      borderRadius: "5px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > i": {
        position: "absolute",
        cursor: "pointer",
        top: "10px",
        right: "10px",
        fontSize: "2rem",
      },
    },
    "input-wrapper": {
      position: "relative",
      width: "80%",
      marginTop: "50px",
      "& > input": {
        height: "60px",
        width: "100%",
        minWidth: "100%",
        padding: 0,
        borderRadius: 0,
        lineHeight: "70px",
        backgroundColor: "transparent",
        fontSize: "20px",
        border: "none",
        outline: "none",
        borderBottom: "3px solid #333333",
        "&:focus + .ModalSearch-input-highlight-4": {
          borderTop: "3px solid #fbc91b",
        },
      },
    },
    "input-highlight": {
      fontSize: "20px",
      userSelect: "none",
      lineHeight: "70px",
      borderTop: "3px solid #333333",
      position: "absolute",
      left: 0,
      bottom: "-1px",
      maxWidth: "100%",
      height: 0,
      color: "transparent",
      overflow: "hidden",
    },
    movie__search_section: {
      overflow: "auto",
      margin: "30px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "@keyframes modalSearch": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      }
    },
    "@keyframes modalSearchShow": {
      "0%": {
        transform: "scale(0)",
      },
      "100%": {
        transform: "scale(1)",
      }
    }
  };
};
export default styles;
