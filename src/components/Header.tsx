import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default function Header() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleUserName = async () => {
      try {
        setLoading(true);
        const result = await getUser();
        setName(result.name);
      } catch (error) {
        console.error('Erro fetching data!', error);
      } finally {
        setLoading(false);
      }
    };
    handleUserName();
  }, []);

  if (loading) return <Loading />;

  return (
    <header data-testid="header-component">
      <nav className="navbar">
        <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      </nav>
      <div className="user-name">
        <h1 data-testid="header-user-name">{ name }</h1>
      </div>
    </header>
  );
}
