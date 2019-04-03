//Creates circles for main and mini menus
const createCircle = (col, s) => {
  //Default for mini menu
  const colorCircle = {
    height: "18px",
    width: "18px",
    borderRadius: "50%",
    cursor: "pointer",
    border: "1px solid rgba(0, 0, 0, 0.4)"
  };

  //Pass an extra arg for larger ones
  if (s === "L") {
    colorCircle.height = "25px";
    colorCircle.width = "25px";
  }

  //Sets the colors
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

export default createCircle;
