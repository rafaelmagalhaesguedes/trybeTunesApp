import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
      </Routes>
    </div>
  );
}

export default App;
