import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faBars } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Spring } from "react-spring";
import ColorMiniMenu from "./ColorMiniMenu";
import Radium from "radium";

// Adds Trash and Hamburger Menu to FA library
library.add(faTrash, faBars);

class Note extends Component {
  // Controls whether the mini menu is open or not
  state = {
    isOpen: false
  };

  // Had to use CSS classes to get round an issue with state not
  // rendering changes to note color
  // This function takes in the color and spits out a class name
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

  openMiniMenu = () => {
    if (this.props.noteOpen === false) {
      this.setState({
        isOpen: !this.state.isOpen
      });
      // Sets the parent state also so only one can be open at a time
      this.props.adjustStatus();
    }
  };

  closeMiniMenu = () => {
    this.setState({
      isOpen: false
    });
    // Sets the parent state also so only one can be open at a time
    this.props.adjustStatus();
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginLeft: -500 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {props => (
          <div style={props}>
            <div style={styles.noteContainer} className={this.getBGColor()}>
              <div style={styles.headerContainer}>
                <p>{moment(this.props.date).format("MMMM Do,  YYYY")}</p>

                <FontAwesomeIcon
                  icon="trash"
                  onClick={this.handleDeleteNote}
                  style={styles.trash}
                />
              </div>

              <textarea
                onChange={this.handleEditNote}
                value={this.props.body}
                maxLength={140}
                style={styles.textArea}
              />

              <FontAwesomeIcon
                icon="bars"
                onClick={this.openMiniMenu}
                style={{ ...styles.trash, ...styles.menu }}
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
const styles = {
  noteContainer: {
    border: "1px solid rgba(0, 0, 0, 0.15)",
    boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)",
    height: "250px",
    position: "relative",
    width: "250px"
  },

  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 10px 8px 5px",
    background: "transparent"
  },

  textArea: {
    width: "100%",
    border: "none",
    resize: "none",
    height: "210px",
    outline: "none",
    fontSize: "1.3rem",
    background: "transparent"
  },

  trash: {
    cursor: "pointer",
    color: "rgba(0, 0, 0, 0.7)"
  },

  menu: {
    position: "absolute",
    bottom: "5px",
    right: "5px",
    fontSize: "1.43em"
  }
};

export default Radium(Note);
