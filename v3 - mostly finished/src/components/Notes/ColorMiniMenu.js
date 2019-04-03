import React from "react";
import { Spring } from "react-spring";

export default class ColorMiniMenu extends React.Component {
  getStyles = col => {
    const colorCircle = {
      height: "18px",
      width: "18px",
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

  handleEditColor = e => {
    const col = getComputedStyle(e.target).backgroundColor;
    this.props.editColor(this.props.id, col);
    this.props.closeMiniMenu();
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 300 }}
      >
        {props => (
          <div style={props}>
            <div style={miniMenu}>
              <div
                style={this.getStyles("red")}
                onClick={this.handleEditColor}
              />
              <div
                style={this.getStyles("blue")}
                onClick={this.handleEditColor}
              />
              <div
                style={this.getStyles("yellow")}
                onClick={this.handleEditColor}
              />
              <div
                style={this.getStyles("green")}
                onClick={this.handleEditColor}
              />
              <div
                style={this.getStyles("orange")}
                onClick={this.handleEditColor}
              />
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const miniMenu = {
  height: "150px",
  width: "30px",
  position: "absolute",
  //   bottom: "0",
  //   right: "-51px",
  bottom: "-1px",
  right: "-1px",
  zIndex: "100",
  background: "white",
  borderRadius: "10px 10px 0px 0px",
  border: "1px solid rgba(0, 0, 0, 0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around"
};
