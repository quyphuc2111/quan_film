const styles = () => {
    return {
        scroll__up: {
            color: "#fff",
            backgroundColor: "#6E57E0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            bottom: "70px",
            right: "20px",
            fontSize: "1.2rem",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer", 
        },
        visible: {
            opacity: "1",
            transition: "opacity .2s",
        },
        hidden: {
            opacity: "0",
            transition: "opacity .2s",
        }
    };
}
export default styles;