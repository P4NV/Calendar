import React, { useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new note
  const handleAddNote = () => {
    if (inputValue.trim()) {
      const newNote = {
        id: Date.now(),
        text: inputValue,
        createdAt: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setNotes([newNote, ...notes]);
      setInputValue('');
    }
  };

  // Delete a note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleAddNote();
    }
  };

  return (
    <div className="notes-container">
      <h3 className="notes-header">Notes</h3>
      
      {/* Input Section */}
      <div className="notes-input-section">
        <textarea
          placeholder="Write your note here... (Ctrl+Enter to add)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="notes-input"
          rows="4"
        />
        <button onClick={handleAddNote} className="notes-add-btn">
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="empty-message">No notes yet. Create one to get started!</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="note-item">
              <div className="note-content">
                <p className="note-text">{note.text}</p>
                <span className="note-datetime">
                  {note.createdAt} • {note.time}
                </span>
              </div>
              <button
                onClick={() => handleDeleteNote(note.id)}
                className="note-delete-btn"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
