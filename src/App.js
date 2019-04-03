import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import uuidv4 from "uuid";
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";

class App extends Component {
  state = {
    notes: [],
    selectedColor: ""
  };

  //Save State To LS Database
  saveStateToLocalStorage = () => {
    localStorage.setItem("selectedColor", this.state.selectedColor);
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  //Check if LS is empty
  //If not, set state to DB
  //If so, set default state, including help message
  componentDidMount() {
    if (localStorage.getItem("notes")) {
      this.setState({
        notes: JSON.parse(localStorage.getItem("notes")),
        selectedColor: localStorage.getItem("selectedColor")
      });
    } else {
      const defaultState = {
        notes: [],
        selectedColor: ""
      };
      this.setState(defaultState);
      this.showHelp();
    }
    //Watch for closing and save
    window.addEventListener("beforeunload", this.saveStateToLocalStorage);
  }

  componentWillUnmount() {
    //Watch for closing and save
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage);
    //In case the component can unmount, close anyway
    this.saveStateToLocalStorage();
  }

  updateSelectedColor = col => {
    this.setState({
      selectedColor: col
    });
  };

  addNewNote = () => {
    this.setState(state => {
      const newNote = {
        date: moment(),
        body: "",
        color: this.state.selectedColor,
        id: uuidv4()
      };
      const newNotes = [...state.notes, newNote];
      return { notes: newNotes };
    });
  };

  deleteNote = id => {
    const filteredNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: filteredNotes
    });
  };

  editNote = (id, update) => {
    const updatedNotes = this.state.notes.map(note =>
      note.id === id ? { ...note, body: update } : note
    );
    this.setState({
      notes: updatedNotes
    });
  };

  editColor = (id, update) => {
    const updatedNotes = this.state.notes.map(note =>
      note.id === id ? { ...note, color: update } : note
    );
    this.setState({
      notes: updatedNotes
    });
  };

  showHelp = () => {
    const createHelpNote = message => {
      this.setState(state => {
        const newNote = {
          date: moment(),
          body: message,
          color: this.state.selectedColor,
          id: uuidv4()
        };
        const newNotes = [...state.notes, newNote];
        return { notes: newNotes };
      });
    };
    createHelpNote(
      "Use the menu in the top-right to set the theme. Click the big button to create a new note."
    );
    createHelpNote(
      "Click the trash icon to delete the note. Use the hamburger menu to change the color."
    );
    createHelpNote(
      "Click on the note to begin editing. If you need to see these again, press HELP!"
    );
  };

  render() {
    return (
      <div className="App">
        <Header
          updateSelectedColor={this.updateSelectedColor}
          selectedColor={this.state.selectedColor}
          showHelp={this.showHelp}
        />
        <Notes
          notes={this.state.notes}
          addNewNote={this.addNewNote}
          deleteNote={this.deleteNote}
          editNote={this.editNote}
          editColor={this.editColor}
        />
      </div>
    );
  }
}

export default App;
