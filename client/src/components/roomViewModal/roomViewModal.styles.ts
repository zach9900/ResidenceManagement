const styles = {
  container: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    width: "60vw",
    height: "60vh",
    transform: "translate(-50%, -50%)",
    background: "ghostwhite",
    boxShadow: 24,
    borderRadius: "2vmin",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "&:focus": {
      border: 0,
    },
  },
  headerContainer: {
    width: "97.5%",
    height: "9%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    color: "black",
    "&:hover": {
      color: "red",
    },
  },
  roomDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  warningIconContainer: {
    width: "4vmin",
    height: "4vmin",
  },
  seperatingLine: {
    width: "100%",
    height: "0.2vmin",
    backgroundColor: "#ccc",
    alignSelf: "center",
  },
  soldiersContainer: {
    width: "95%",
    height: "70%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "0.55vmin",
    gridAutoFlow: "column",
    direction: "rtl",
  },

  // ------------------

  failuresCardContainer: {
    position: "absolute",
    left: "82%",
    top: "20.05%",
    width: "15vw",
    height: "38vh",
    backgroundColor: "whitesmoke",
    borderRadius: "2vmin",
    overflow: "hidden",
    userSelect: "none",
    paddingBottom: "3vh",
  },
  topCardContainer: {
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "flex-start",
  },
  closeCardButton: {
    width: "20%",
    height: "100%",
    padding: "0",
    borderRadius: "2vmin",
    minWidth: "0 !important",
    color: "black",
    "&:hover": {
      color: "red",
    },
  },
  failuresListContainer: {
    width: "92%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    direction: "rtl",
    paddingBottom: "5vmin",
    overflowY: "auto",
  },
  failuresHeader: {
    textDecoration: "underline",
    fontSize: "2.9vmin",
    marginTop: 0,
  },
  failureContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  xIcon: {
    margin: 0,
    paddingLeft: "1vw",
    width: "1.2vmin",
    height: "1.2vmin",
  },
  failureText: { marginTop: 0, margin: 0, fontSize: "2.3vmin" },
};

export default styles;
