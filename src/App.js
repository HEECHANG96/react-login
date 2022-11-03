import './App.css';

import Main from './pages/Main';
import Login from './pages/Login';
import Preview from './pages/Preview';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Preview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
