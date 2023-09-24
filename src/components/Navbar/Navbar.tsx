import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import LogoMobile from '../../images/logo-mobile.png';
import imagemPadrao from '../../images/user-mock.png';
import { getUser } from '../../services/userAPI';
import {
  Logo,
  NavbarContainer,
  NavbarLogo,
  NavbarResponsive,
  MenuToggleButton,
  NavbarLinks,
  UserInfos,
} from './Styles';

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

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarResponsive>
      <NavbarContainer>
        <NavbarLogo>
          <Logo src={ LogoMobile } alt="Logo" />
        </NavbarLogo>

        <MenuToggleButton
          className={ isOpen ? 'active' : '' }
          onClick={ handleToggleMenu }
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </MenuToggleButton>

        <NavbarLinks className={ isOpen ? 'active' : '' }>
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
          <UserInfos>
            <img
              className="image-user"
              src={ imageUser || imagemPadrao }
              alt="imageUser"
            />
            <p className="user-name" data-testid="header-user-name">{ name }</p>
          </UserInfos>
        </NavbarLinks>
      </NavbarContainer>
    </NavbarResponsive>
  );
}

export default Navbar;
