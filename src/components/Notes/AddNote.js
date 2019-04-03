import React from "react";
import Radium from "radium";

function AddNote({ addNewNote }) {
  return (
    <div style={styles.container}>
      <div style={styles.add} onClick={addNewNote}>
        <div style={styles.crossContainer}>
          <div style={[styles.crossBoth, styles.horizontal]} />
          <div style={[styles.crossBoth, styles.vertical]} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "250px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: ".8s",

    ":hover": {
      transform: "translate(2px, 2px) rotate(45deg)"
    }
  },

  add: {
    height: "100px",
    width: "100px",
    border: "2px solid black",
    borderRadius: "50%",
    alignSelf: "center",
    justifySelf: "center",
    cursor: "pointer",
    transition: "1s"
  },

  crossContainer: {
    height: "100%",
    width: "100%",
    position: "relative"
  },

  crossBoth: {
    position: "absolute",
    background: "black",
    borderRadius: "50%"
  },

  horizontal: {
    width: "50px",
    height: "5px",
    top: "45px",
    left: "23px"
  },

  vertical: {
    width: "5px",
    height: "50px",
    top: "23px",
    left: "45px"
  }
};

export default Radium(AddNote);
