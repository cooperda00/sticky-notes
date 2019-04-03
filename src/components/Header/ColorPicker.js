import React from "react";
import createCircle from "../../Helpers/createCircle";
import Radium from "radium";

function ColorPicker({ updateSelectedColor }) {
  //Takes the color of the clicked div's background and
  // applies it as the app theme
  const handleUpdateColor = e => {
    const bgCol = getComputedStyle(e.target).backgroundColor;
    updateSelectedColor(bgCol);
  };

  return (
    <div style={styles.container}>
      <div style={styles.flexContainer}>
        <div style={createCircle("red", "L")} onClick={handleUpdateColor} />
        <div style={createCircle("blue", "L")} onClick={handleUpdateColor} />
        <div style={createCircle("yellow", "L")} onClick={handleUpdateColor} />
        <div style={createCircle("green", "L")} onClick={handleUpdateColor} />
        <div style={createCircle("orange", "L")} onClick={handleUpdateColor} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "150px"
  },

  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  }
};

export default Radium(ColorPicker);
