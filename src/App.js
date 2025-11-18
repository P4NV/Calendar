import Sidebar from './components/SideBar';
import HeadSection from './components/HeadSection';
import CalendarCont from './components/CalendarCont';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <header>
          <HeadSection />
        </header>
        <main className="calendar-main">
          <CalendarCont />
        </main>
        <footer className="app-footer">
          {/* <p>&copy; 2025 Calendar App. All rights reserved.</p> */}
        </footer>
      </div>
    </div>
  );
}

export default App;
