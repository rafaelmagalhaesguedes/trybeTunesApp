import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import imagemPadrao from '../../images/user-mock.png';
import { getUser } from '../../services/userAPI';
import LogoMobile from '../../images/logo-mobile.png';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [imageUser, setImageUser] = useState('');

  useEffect(() => {
    const handleUserName = async () => {
      try {
        const result = await getUser();
        setName(result.name);
        setImageUser(result.image);
      } catch (error) {
        console.error('Erro fetching data!', error);
      }
    };
    handleUserName();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-responsive">
      <div className="navbar-container">
        <div className="logo-navbar">
          <img className="logo" src={ LogoMobile } alt="Logo" />
        </div>

        <button
          className={ `menu-toggle ${isOpen ? 'active' : ''}` }
          onClick={ toggleMenu }
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>

        <div className={ `navbar-links ${isOpen ? 'active' : ''}` }>
          <Link to="/search" className="link">
            <FontAwesomeIcon className="icon" icon={ faSearch } />
            {' '}
            <p className="text-icon">Search</p>
          </Link>
          <Link to="/favorites" className="link">
            <FontAwesomeIcon className="icon" icon={ faStar } />
            {' '}
            <p className="text-icon">Favorites</p>
          </Link>
          <Link to="/profile" className="link">
            <FontAwesomeIcon className="icon" icon={ faUser } />
            {' '}
            <p className="text-icon">Profile</p>
          </Link>
          <div className="user">
            <img
              className="image-user"
              src={ imageUser || imagemPadrao }
              alt="imageUser"
            />
            <p className="user-name" data-testid="header-user-name">{ name }</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
