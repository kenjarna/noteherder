import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
    const notes = [
      {
        id: 'note-4',
        title: 'My Fancy Note',
        body: 'Fancy as shit',
      },
      {
        id: 'note-5',
        title: 'Take 2',
        body: 'Another one',
      }
    ]

    return (
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {notes.map(note => <Note notes={note}/>)}
            
          </ul>
        </div>
    )
}

export default NoteList