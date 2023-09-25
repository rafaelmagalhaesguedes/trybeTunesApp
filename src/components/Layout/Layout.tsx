import { Outlet } from 'react-router-dom';
import { Container } from './Styles';
import Header from '../Header/Header';

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
