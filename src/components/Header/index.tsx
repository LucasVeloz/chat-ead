import { Link } from 'react-router-dom';

import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <nav>
          <ul>
            <li>
              <Link  to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/regulation">
                Regulation
              </Link>
            </li>
          </ul>
        </nav>
    </Container>
  );
}