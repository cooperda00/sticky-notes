import React from "react";
import createCircle from "../../Helpers/createCircle";
import { Spring } from "react-spring";
import Radium from "radium";

function ColorMiniMenu({ editColor, id, closeMiniMenu }) {
  const handleEditColor = e => {
    const col = getComputedStyle(e.target).backgroundColor;
    editColor(id, col);
    closeMiniMenu();
  };

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 300 }}
    >
      {props => (
        <div style={props}>
          <div style={styles.miniMenu}>
            <div style={createCircle("red")} onClick={handleEditColor} />
            <div style={createCircle("blue")} onClick={handleEditColor} />
            <div style={createCircle("yellow")} onClick={handleEditColor} />
            <div style={createCircle("green")} onClick={handleEditColor} />
            <div style={createCircle("orange")} onClick={handleEditColor} />
          </div>
        </div>
      )}
    </Spring>
  );
}

const styles = {
  miniMenu: {
    alignItems: "center",
    background: "white",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    borderRadius: "10px 10px 0px 0px",
    bottom: "-1px",
    display: "flex",
    flexDirection: "column",
    height: "150px",
    justifyContent: "space-around",
    position: "absolute",
    right: "-1px",
    width: "30px",
    zIndex: "100"
  }
};

export default Radium(ColorMiniMenu);
