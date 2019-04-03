import React from "react";
import ColorPicker from "./ColorPicker";

export default function Header(props) {
  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    height: "10vh",
    background: props.selectedColor,
    alignItems: "center",
    padding: "0 2rem",
    borderBottom: "1px solid rgba(0, 0, 0 , 0.2)"
  };

  return (
    <header style={headerStyles}>
      <h1>Sticky Notes</h1>
      <ColorPicker
        selectedColor={props.selectedColor}
        updateSelectedColor={props.updateSelectedColor}
      />
    </header>
  );
}
