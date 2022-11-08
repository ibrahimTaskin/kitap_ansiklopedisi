import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </div>
  );
}

export default App;
