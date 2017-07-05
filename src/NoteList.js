import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
    const note = {
      id: 'note-4',
      title: 'My Fancy Note',
      body: 'Fancy as shit',
    }

    return (
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <Note note={note}/>
          </ul>
        </div>
    )
}

export default NoteList