import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faBars } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import ColorMiniMenu from "./ColorMiniMenu";
import { Spring } from "react-spring";

library.add(faTrash, faBars);

export default class Note extends Component {
  state = {
    isOpen: false
  };

  noteStyles = {
    height: "250px",
    width: "250px",
    position: "relative",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)"
  };

  textArea = {
    width: "100%",
    border: "none",
    resize: "none",
    height: "210px",
    outline: "none",
    fontSize: "1.3rem"
  };

  getBGColor = () => {
    switch (this.props.color) {
      case "rgb(246, 167, 68)":
        return "bg-orange";
      case "rgb(241, 117, 141)":
        return "bg-red";
      case "rgb(96, 198, 229)":
        return "bg-blue";
      case "rgb(233, 233, 101)":
        return "bg-yellow";
      case "rgb(149, 209, 102)":
        return "bg-green";
      default:
        break;
    }
  };

  handleDeleteNote = () => {
    this.props.deleteNote(this.props.id);
  };

  handleEditNote = e => {
    this.props.editNote(this.props.id, e.target.value);
  };

  openMiniMenu = e => {
    if (this.props.noteOpen === false) {
      this.setState({
        isOpen: !this.state.isOpen
      });
      this.props.adjustStatus();
    }
  };

  closeMiniMenu = () => {
    this.setState({
      isOpen: false
    });
    this.props.adjustStatus();
    this.props.adjustRenderNotes();
  };

  changeStateColor = col => {
    this.setState({
      bgColor: col
    });
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginLeft: -500 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {props => (
          <div style={props}>
            <div style={this.noteStyles} className={this.getBGColor()}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px 10px 8px 5px"
                }}
              >
                <p>{moment(this.props.date).format("MMMM Do,  YYYY")}</p>
                <FontAwesomeIcon
                  style={{ cursor: "pointer", color: "rgba(0, 0, 0, 0.7)" }}
                  icon="trash"
                  onClick={this.handleDeleteNote}
                />
              </div>
              <textarea
                onChange={this.handleEditNote}
                value={this.props.body}
                style={this.textArea}
                maxLength={140}
                className={this.getBGColor()}
              />
              <FontAwesomeIcon
                icon="bars"
                style={hamburgerMenu}
                onClick={this.openMiniMenu}
              />
              {this.state.isOpen && (
                <ColorMiniMenu
                  editColor={this.props.editColor}
                  id={this.props.id}
                  closeMiniMenu={this.closeMiniMenu}
                  changeStateColor={this.changeStateColor}
                />
              )}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const hamburgerMenu = {
  position: "absolute",
  bottom: "5px",
  right: "5px",
  cursor: "pointer",
  fontSize: "1.43em",
  color: "rgba(0, 0, 0, 0.5)"
};
