import React from "react";
import { HashLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div style={styles.container}>
      <HashLoader color="#000000" size={250} />
      <p style={styles.text}>Loading...</p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(255, 136, 81)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    position: "fixed",
    top: 0,
    left: 0,
  },
  text: {
    marginTop: "1rem",
    fontSize: "4rem",
    color: "#000000",
  },
};

export default LoadingScreen;
