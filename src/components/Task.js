import React, { useState } from 'react';

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new task
  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        createdAt: new Date().toLocaleDateString()
      };
      setTasks([newTask, ...tasks]);
      setInputValue('');
    }
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="task-container">
      <h3 className="task-header">Tasks</h3>
      
      {/* Input Section */}
      <div className="task-input-section">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="task-input"
        />
        <button onClick={handleAddTask} className="task-add-btn">
          +
        </button>
      </div>

      {/* Tasks List */}
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one to get started!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                  className="task-checkbox"
                />
                <div className="task-text-wrapper">
                  <p className="task-text">{task.text}</p>
                  <span className="task-date">{task.createdAt}</span>
                </div>
              </div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="task-delete-btn"
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
