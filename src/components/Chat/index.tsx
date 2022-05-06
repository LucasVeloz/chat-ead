import { Children, useEffect, useRef, useState } from 'react';
import { FaRobot } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { handleLinks, handleMessage, initialUserMessage } from './botMessages';

import { ChatContainer, Container, Message, RobotMessages, UserMessages } from './styles';


interface ItensProps {
  isRobot: boolean;
  message: string;
  links?: string[];
}

interface Props {
  close: () => void;
}


const Messages = ({ messages }: {messages: ItensProps[]}) => {
  return (
    <>
    {
      Children.toArray(messages.map(item => {
        if(item.isRobot) {
          return (
            <RobotMessages>
              <Message>{item.message}</Message>
              {!!item.links?.length && item.links.map((element, index) => (
                <a
                  href={element}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ maxWidth: 50, width: 50, display: 'block' }}
                >
                -link {index + 1}
                </a>
              ))}
            </RobotMessages>
          )
        }
        return (
          <UserMessages>
            <Message>{item.message}</Message>
          </UserMessages>
        )
      }))
    }
    </>
  ) 
}

export const Chat = ({ close }: Props) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([] as ItensProps[]);
  const ref = useRef<HTMLDivElement>(null);

  const sendUserMessage = () => {
    if (!input) return;
    const response = handleMessage(input);
    const links = handleLinks(input);
    console.log(links)
    const newMessages: ItensProps[] = [
      {
        isRobot: false,
        message: input,
      }
    ]
    if (!response) newMessages.push({isRobot: true, message: 'não entendi o que quis dizer'})
    if (response) {
      newMessages.push({isRobot: true, message: response, links })
    }
      setMessages(oldState => [
        ...oldState,
        ...newMessages
      ]);
    setInput('');
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end',  inline: 'nearest'})
  }


  useEffect(() => {
    setMessages([{
      isRobot: true,
      message: 'Olá, Qual seu nome?'
    }]);
    setInput(initialUserMessage)
  }, [])

  return (
    <Container>
      <div className='header'>
        <FaRobot size={20} />
        <AiFillCloseCircle size={20} onClick={close} />
      </div>
      <div className="content">
        <Messages messages={messages} />
        <div ref={ref} />
      </div>
      <div className="userContainer">
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          onKeyDown={e => e.key === 'Enter' && sendUserMessage()}
        />
        <button onClick={sendUserMessage}>enviar</button>
      </div>
    </Container>
  );
}


export const ChatComponent = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <ChatContainer>
      {showChat ?
        <Chat close={() => setShowChat(false)} />
        :
        <button className='openChat' onClick={() => setShowChat(true)}>
          <FaRobot size={20} color="white" />
        </button>
      }
    </ChatContainer>
  )
}