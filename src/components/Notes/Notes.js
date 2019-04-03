import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import Radium from "radium";

class Notes extends React.Component {
  // Tracks whether a mini menu is open so there can
  // only be one open at a time
  state = {
    noteOpen: false
  };

  adjustStatus = () => {
    this.setState({
      noteOpen: !this.state.noteOpen
    });
  };

  renderNotes = () => {
    return this.props.notes.map(note => {
      return (
        <Note
          body={note.body}
          date={note.date}
          id={note.id}
          color={note.color}
          key={note.id}
          deleteNote={this.props.deleteNote}
          editNote={this.props.editNote}
          editColor={this.props.editColor}
          noteOpen={this.state.noteOpen}
          adjustStatus={this.adjustStatus}
        />
      );
    });
  };

  render() {
    return (
      <div style={styles.notesGrid}>
        {this.renderNotes()}
        <AddNote addNewNote={this.props.addNewNote} />
      </div>
    );
  }
}

const styles = {
  notesGrid: {
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(auto-fit, 250px)",
    justifyContent: "center",
    margin: "15px 15px"
  }
};

export default Radium(Notes);
