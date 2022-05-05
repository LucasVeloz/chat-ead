import about from '../../utils/about';

import { Container, Main } from './styles';

export const About = () => {
  return (
    <Container>
      <Main>
      {about.map((item, index) => (
          <section>
            {index % 2 !== 0 &&
              <img src={item.image} alt="demonstrative" />
            }
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            {index % 2 === 0 &&
              <img src={item.image} alt="demonstrative" />
            }
          </section>
        ))}
      </Main>
    </Container>
  );
}
