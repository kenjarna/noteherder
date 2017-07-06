import React, { Component } from 'react'
import './App.css'
import Main from './Main'

class App extends Component {
    constructor () {
        super()


        this.state = {
            notes: {
                'note-4': {
                    id: 'note-4',
                    title: 'Note from obj',
                    body: 'Doope',
                },
                'note-5': {
                    id: 'note-5',
                    title: 'Key to success',
                    body: 'Cool as hell maaine',
                },
            },
            currentNote: this.blankNote(),
        }
    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }
    setCurrentNote = (note) => {
        this.setState({currentNote: note})
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    saveNote = (note) => {
        const notes = {...this.state.notes}
        if (!note.id) {
            note.id = Date.now()
        }
        notes[note.id] = note
        
        this.setState({ notes }) // same as {notes:notes}
        this.setCurrentNote(note) //this displays in the form
    }
    render() {
        const actions = {
            setCurrentNote: this.setCurrentNote,
            resetCurrentNote: this.resetCurrentNote,
            saveNote: this.saveNote,
        }
        return (
        < div className = "App" >
            <Main notes={this.state.notes}
                  currentNote={this.state.currentNote}
                  {...actions}
            />
        </div>
        );
    }
}

export default App;