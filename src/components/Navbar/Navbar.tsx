import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import LogoMobile from '../../images/logo-mobile.png';
import imagemPadrao from '../../images/user-mock.png';
import { getUser } from '../../services/userAPI';
import {
  Logo,
  NavbarResponsive,
  NavbarContainer,
  NavbarLogo,
  MenuToggleButton,
  Bar,
  NavbarLinks,
  NavLink,
  UserInfos,
  UserImage,
  Username,
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
          <Bar />
          <Bar />
          <Bar />
        </MenuToggleButton>

        <NavbarLinks className={ isOpen ? 'active' : '' }>
          <NavLink to="/search">
            <FontAwesomeIcon icon={ faSearch } />
            Pesquisar
          </NavLink>

          <NavLink to="/favorites">
            <FontAwesomeIcon icon={ faStar } />
            Favoritas
          </NavLink>

          <NavLink to="/profile">
            <FontAwesomeIcon icon={ faUser } />
            Perfil
          </NavLink>

          <UserInfos>
            <UserImage
              src={ imageUser || imagemPadrao }
              alt="Imagem de perfil do usuário"
            />
            <Username data-testid="header-user-name">
              { name }
            </Username>
          </UserInfos>

        </NavbarLinks>
      </NavbarContainer>
    </NavbarResponsive>
  );
}

export default Navbar;
