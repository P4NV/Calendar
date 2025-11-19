import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import HeadSection from './components/HeadSection';
import CalendarCont from './components/CalendarContainer';
import Task from './components/Task';
import Notes from './components/Notes';
import './App.css';

function App() {
  const [showTask, setShowTask] = useState(true);

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <header>
          <HeadSection showTask={showTask} setShowTask={setShowTask} />
        </header>
        <main className="calendar-main">
          <div className="main-wrapper">
            <div className="calendar-section">
              <CalendarCont />
            </div>
            <div className="side-panel-section">
              <div className="side-panel-content">
                {showTask ? <Task /> : <Notes />}
              </div>
            </div>
          </div>
        </main>
        <footer className="app-footer">
          {/* <p>&copy; 2025 Calendar App. All rights reserved.</p> */}
        </footer>
      </div>
    </div>
  );
}

export default App;
