import home from '../../utils/home';
import regulation from '../../utils/regulation';
import about from '../../utils/about';
const messages = [
  {
    received: /oi|ol[áa]/i,
    description: 'Olá',
  },
  {
    received: /qual seu nome?/i,
    description: 'Meu nome é Carlos, seu Bot EAD',
  },
  {
    received: /como [eé] o vestibular na ead?/i,
    description: 'São centenas de universidades que oferecem graduação a distância. Por isso, o vestibular pode variar bastante. Podendo ser tradicional: acontece em datas preestabelecidas pela faculdade, e muitas vezes há várias edições até o preenchimento das vagas, ou agendado: o candidato pode escolher o dia e horário mais convenientes para fazer a prova.',
  },
  ...home,
  ...regulation,
  ...about,
]


export const initialUserMessage = 'Meu nome é: ';

const responseFromArray = (message: string) => {
  return messages.find(element => element.received.exec(message))?.description;
}


export const handleMessage = (message: string) => {
  if (message.includes(initialUserMessage)) return `Olá ${message.replace(initialUserMessage, '')}`
  return responseFromArray(message);
}