import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignIn } from './components/auth/SignIn';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/layout/Navbar';
import { BookDetail } from './components/pages/BookDetail/BookDetail';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/book/:id' element={<BookDetail />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </div>
  );
}

export default App;
