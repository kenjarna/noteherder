import React from 'react'

const Note = (props) => {
    const handleClick = (ev) => {
        console.log('clicked')
    }

    return (
        <a onClick={handleClick}>
            <li>
                <div className="note">
                    <div className="note-title">
                        {props.notes.title}
                    </div>
                    <div className="note-body">
                    <p>
                        {props.notes.body}
                    </p>
                    </div>
                </div>
            </li>
        </a>
    )
}

export default Note