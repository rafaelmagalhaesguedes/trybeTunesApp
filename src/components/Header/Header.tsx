import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import imagemPadrao from '../../images/user-mock.png';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';
import Logo from '../../images/logo.png';
import {
  ContainerHeader,
  HeaderLogo,
  NavbarHeader,
  NavbarIcon,
  NavbarLink,
  NavbarUserInfo,
  HeaderLoading,
  UserImage,
  UserName,
} from './Styles';

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
    <ContainerHeader data-testid="header-component">
      <Link to="/search">
        <HeaderLogo src={ Logo } alt="Logo" />
      </Link>

      <NavbarHeader>
        <NavbarLink to="/search" data-testid="link-to-search">
          <NavbarIcon icon={ faSearch } />
          Search
        </NavbarLink>
        <NavbarLink to="/favorites" data-testid="link-to-favorites">
          <NavbarIcon icon={ faStar } />
          Favorites
        </NavbarLink>
        <NavbarLink to="/profile" data-testid="link-to-profile">
          <NavbarIcon icon={ faUser } />
          Profile
        </NavbarLink>
      </NavbarHeader>
      {!loading ? (
        <NavbarUserInfo>
          <UserImage src={ imageUser || imagemPadrao } alt="imageUser" />
          <UserName data-testid="header-user-name">{name}</UserName>
        </NavbarUserInfo>
      ) : (
        <HeaderLoading>
          <Loading />
        </HeaderLoading>
      )}
    </ContainerHeader>
  );
}
