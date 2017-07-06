import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import base from './base'

class App extends Component {
    constructor () {
        super()

        this.state = {
            notes: {},
            currentNote: this.blankNote(),
        }
    }

    componentDidMount = () => {
        base.syncState(
            'notes',
            {
                context: this,
                state: 'notes',
            }
        )
    }

    blankNote = () => {
        return {
        id: null,
        title: '',
        body: '',
        }
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
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

        this.setState({ notes }) //same as {notes:notes}
        this.setCurrentNote(note) //this will be displayed in the form
    }

    removeCurrentNote = () => {
        const notes = {...this.state.notes}
        delete notes[this.state.currentNote.id]

        this.setState({ notes })
        this.resetCurrentNote()
    }


    render() {
        const actions = {
            setCurrentNote: this.setCurrentNote,
            resetCurrentNote: this.resetCurrentNote,
            saveNote: this.saveNote,
            removeCurrentNote: this.removeCurrentNote,
        }

        const noteData = {
            notes: this.state.notes,
            currentNote: this.state.currentNote,
        }
        return (
        < div className = "App" >
            <Main 
                {...noteData}
                {...actions}
            />
        </div>
        );
    }
}

export default App;