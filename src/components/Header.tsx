import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../css/header.css';
import Logo from '../images/logo.png';

export default function Header() {
  const [name, setName] = useState('');
  const [imageUser, setImageUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleUserName = async () => {
      try {
        setLoading(true);
        const result = await getUser();
        setName(result.name);
        setImageUser(result.image);
      } catch (error) {
        console.error('Erro fetching data!', error);
      } finally {
        setLoading(false);
      }
    };
    handleUserName();
  }, []);

  return (
    <header data-testid="header-component">
      <img className="header-logo" src={ Logo } alt="Logo" />
      <nav className="navbar">
        <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      </nav>
      {!loading ? (
        <div className="user">
          <img className="image-user" src={ imageUser } alt="imageUser" />
          <p className="user-name" data-testid="header-user-name">{ name }</p>
        </div>
      ) : (
        <Loading />
      )}
    </header>
  );
}
