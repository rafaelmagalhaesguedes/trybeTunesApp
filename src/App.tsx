import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import {
  Login,
  Layout,
  Search,
  Album,
  Favorites,
  Profile,
  ProfileEdit,
  PageNotFound,
} from './pages';

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/" element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/profile/edit" element={ <ProfileEdit /> } />
        </Route>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
