import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import moment from "moment";
import uuidv4 from "uuid";

class App extends Component {
  state = {
    notes: [],
    selectedColor: "#F1758D"
  };

  saveStateToLocalStorage = () => {
    localStorage.setItem("selectedColor", this.state.selectedColor);
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  componentDidMount() {
    if (localStorage.getItem("notes") !== null) {
      const savedNotes = JSON.parse(localStorage.getItem("notes"));
      const savedSelectedColor = localStorage.getItem("selectedColor");
      this.setState({
        notes: savedNotes,
        selectedColor: savedSelectedColor
      });
    } else {
      const defaultState = {
        notes: [
          {
            date: moment(),
            body: "HellO Brother, May i Have a SpagAt??",
            color: this.state.selectedColor,
            id: uuidv4()
          }
        ],
        selectedColor: "white"
      };
      this.setState({
        ...defaultState
      });
    }
    window.addEventListener("beforeunload", this.saveStateToLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage);
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
    const updatedNotes = this.state.notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          body: update
        };
      } else {
        return note;
      }
    });
    this.setState({
      notes: updatedNotes
    });
  };

  editColor = (id, update) => {
    const updatedNotes = this.state.notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          color: update
        };
      } else {
        return note;
      }
    });
    this.setState({
      notes: updatedNotes
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          updateSelectedColor={this.updateSelectedColor}
          selectedColor={this.state.selectedColor}
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
