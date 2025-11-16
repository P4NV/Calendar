import Sidebar from './components/SideBar';
import HeadSection from './components/HeadSection';
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
          {/* Calendar content will go here */}
        </main>
        <footer className="app-footer">
          {/* Footer content will go here */}
        </footer>
      </div>
    </div>
  );
}

export default App;
