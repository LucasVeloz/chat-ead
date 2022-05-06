import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <h1>Me Ajuda EAD</h1>
      <nav>
          <ul>
            <li>
              <NavLink  to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal'})}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal'})}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/regulation" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal'})}>
                Regulamentação
              </NavLink>
            </li>
          </ul>
        </nav>
    </Container>
  );
}