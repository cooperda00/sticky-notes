import React from "react";

function ColorPicker(props) {
  const handleUpdateColor = e => {
    const bgCol = getComputedStyle(e.target).backgroundColor;
    props.updateSelectedColor(bgCol);
  };

  const getStyles = col => {
    const colorCircle = {
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      cursor: "pointer",
      border: "1px solid rgba(0, 0, 0, 0.4)"
    };

    switch (col) {
      case "red":
        return {
          ...colorCircle,
          background: "#F1758D"
        };
      case "blue":
        return {
          ...colorCircle,
          background: "#60C6E5"
        };
      case "yellow":
        return {
          ...colorCircle,
          background: "#E9E965"
        };
      case "green":
        return {
          ...colorCircle,
          background: "#95D166"
        };
      case "orange":
        return {
          ...colorCircle,
          background: "#F6A744"
        };
      default:
        return {
          ...colorCircle,
          background: "white"
        };
    }
  };

  return (
    <div style={{ width: "150px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px"
        }}
      >
        <div style={getStyles("red")} onClick={handleUpdateColor} />
        <div style={getStyles("blue")} onClick={handleUpdateColor} />
        <div style={getStyles("yellow")} onClick={handleUpdateColor} />
        <div style={getStyles("green")} onClick={handleUpdateColor} />
        <div style={getStyles("orange")} onClick={handleUpdateColor} />
      </div>
    </div>
  );
}

export default ColorPicker;
