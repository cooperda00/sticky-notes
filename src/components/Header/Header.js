import React from "react";
import ColorPicker from "./ColorPicker";
import Radium from "radium";

function Header({ selectedColor, updateSelectedColor, showHelp }) {
  const styles = {
    header: {
      alignItems: "center",
      background: selectedColor,
      borderBottom: "1px solid rgba(0, 0, 0 , 0.2)",
      display: "flex",
      height: "100px",
      justifyContent: "space-between",
      padding: "0 2rem"
    },

    h1: {
      fontSize: "2.1rem"
    },

    container: {
      display: "flex",
      flexDirection: "column"
    },

    helpBtn: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.2rem",
      cursor: "pointer"
    }
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Sticky Notes</h1>

      <div style={styles.container}>
        <div style={styles.helpBtn} onClick={showHelp}>
          HELP!
        </div>
        <ColorPicker
          selectedColor={selectedColor}
          updateSelectedColor={updateSelectedColor}
        />
      </div>
    </header>
  );
}

export default Radium(Header);
