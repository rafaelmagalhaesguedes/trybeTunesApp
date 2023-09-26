import { Routes, Route } from 'react-router-dom';
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
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/profileedit" element={ <ProfileEdit /> } />
      </Route>
      <Route path="*" element={ <PageNotFound /> } />
    </Routes>
  );
}

export default App;
