import { Routes, Route } from 'react-router-dom';
import { Login, Search, Album } from './pages';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Routes>
    </div>
  );
}

export default App;
