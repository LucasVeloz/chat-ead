import home from '../../utils/home';

import { Container, Main } from './styles';

export const Home = () => {
  return (
    <Container>
      <Main>
        {home.map((item, index) => (
          <section>
            {index % 2 !== 0 &&
              <img src={item.image} alt="demonstrative" />
            }
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              {item.links?.length && item.links.map(element => (
                <a 
                  href={element} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ maxWidth: 500 }}
                >
                  {element}
                </a>
              ))}
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
