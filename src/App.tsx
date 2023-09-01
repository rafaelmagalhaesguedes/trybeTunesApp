import { Routes, Route } from 'react-router-dom';
import { Login, Layout, Search, Album, Favorites } from './pages';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/" element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
