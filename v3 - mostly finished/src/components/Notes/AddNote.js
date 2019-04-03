import React from "react";

export default function AddNote(props) {
  return (
    <div
      style={{
        height: "250px",
        width: "250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="add-button" style={add} onClick={props.addNewNote}>
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
          <div style={horizontal} />
          <div style={vertical} />
        </div>
      </div>
    </div>
  );
}

const add = {
  height: "100px",
  width: "100px",
  border: "2px solid black",
  borderRadius: "50%",
  alignSelf: "center",
  justifySelf: "center",
  cursor: "pointer",
  transition: "1s"
};

const horizontal = {
  position: "absolute",
  width: "50px",
  height: "5px",
  background: "black",
  top: "45px",
  left: "23px",
  borderRadius: "50%"
};

const vertical = {
  position: "absolute",
  width: "5px",
  height: "50px",
  background: "black",
  top: "23px",
  left: "45px",
  borderRadius: "50%"
};
