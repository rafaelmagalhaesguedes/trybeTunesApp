import { Routes, Route } from 'react-router-dom';
import { Login, Search } from './pages';

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
