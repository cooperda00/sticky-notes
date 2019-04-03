import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

export default class Notes extends React.Component {
  state = {
    noteOpen: false
  };

  adjustStatus = () => {
    this.setState({
      noteOpen: !this.state.noteOpen
    });
  };

  adjustRenderNotes = () => {
    this.setState({
      renderNotes: !this.state.renderNotes
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
          adjustRenderNotes={this.adjustRenderNotes}
        />
      );
    });
  };
  render() {
    return (
      <div className="notes-container">
        {this.renderNotes()}
        <AddNote addNewNote={this.props.addNewNote} />
      </div>
    );
  }
}
