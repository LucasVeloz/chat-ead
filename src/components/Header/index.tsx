import { Link, NavLink } from 'react-router-dom';

import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
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
                Regulation
              </NavLink>
            </li>
          </ul>
        </nav>
    </Container>
  );
}