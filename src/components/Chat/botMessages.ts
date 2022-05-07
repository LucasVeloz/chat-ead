import home from '../../utils/home';
import regulation from '../../utils/regulation';
import about from '../../utils/about';

interface Props {
  received: RegExp;
  description: string;
  links?: string[];

}
const messages: Props[]  = [
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
  {
    received: /Existe algum requisito t[eé]cnico que o docente deva cumprir para ministrar aulas na modalidade EAD?/i,
    description: `Segundo o art. 8º da resolução nº 1, de 11 de março de 2016: "Os profissionais da educação, que atuarem na EaD, devem ter formação condizente com a legislação em vigor e preparação específica para atuar nessa modalidade educacional."`,
  },
  {
    received: /Como [ée] o vestibular na EAD?/i,
    description: `São centenas de universidades que oferecem graduação a distância. Por isso, o vestibular pode variar bastante. Podendo ser tradicional: acontece em datas preestabelecidas pela faculdade, e muitas vezes há várias edições até o preenchimento das vagas, ou agendado: o candidato pode escolher o dia e horário mais convenientes para fazer a prova.
    Fonte: https://www.ead.com.br/vestibular-ead
    `,
  },
  {
    received: /como [eé] feit[ao] a cola[çc][aã]o de grau para os alun[oa]s da EAD?/i,
    description: 'As universidades EAD proporcionam uma cerimônia de formatura opcional para os alunos que quiserem participar. A organização da formatura é realizada pelo polo onde o aluno se inscreveu para o curso, de preferência com localização mais próxima de sua moradia.',
  },
  {
    received: /como [eé] [o|feito|o] acesso aos laborat[óo]rios?/i,
    description: 'Para aulas de laboratório a EAD proporciona os polos de educação a distância que podem servir para o atendimento presencial para aulas de laboratório, onde os alunos são acompanhados de um tutor.',
  },
  {
    received: /como [eé] [o|feito|o] acesso [aáà] biblioteca na ead?/i,
    description: 'O aluno da EAD tem acesso a bibliotecas digitais, como a minha biblioteca digital, ou BCEDigital, que possibilita que os estudantes tenham acesso aos livros digitalmente utilizando as credenciais disponibilizadas por sua instituição de ensino.',
  },
  {
    received: /[OoAa] estudante EAD tem direito a carteira de estudante?/i,
    description: 'Segundo a UNE (União Nacional dos Estudantes), os estudantes dos cursos de ensino a distância têm direito a carteirinha. Assim, recebem o benefício da meia-entrada no ingresso de cinemas, shows, jogos, além de outros eventos culturais.',
  },
  {
    received: /Como o[s] estudante[s] s[ãa]o avaliados na EAD?/i,
    description: `Em um curso EaD, as aulas são ministradas através do computador ou do celular com acesso à internet. Dessa maneira, o aluno assiste aos conteúdos, faz perguntas (digitando via chat ou falando mesmo, pelo microfone) e até mesmo entrega seus trabalhos por e-mail.
    Mas assim como em qualquer outro curso, em determinados períodos são pedidas provas que visam medir se o aluno está ou não tendo bom aproveitamento daquela disciplina. Uma prova na modalidade EaD pode ser discursiva ou de múltipla escolha, tendo mesmo rigor de provas de cursos presenciais, avaliando o que se foi aprendido e se o aluno está apto ou não naqueles saberes. Em relação à aplicação, as universidades podem variar nos métodos utilizados.`,
  },
  {
    received: /Os estudantes de EAD têm direito às políticas de ações afirmativas?/i,
    description: `Sim os estudantes da EAD possuem direito a políticas de ações afirmativas como PIBIC, PIBIT, PROIC, PROICAF, PIBID. Segundo o governo 1(https://www.gov.br/pt-br/servicos/candidatar-se-a-bolsa-de-iniciacao-cientifica-em-pesquisa-pibic) / 2(https://www.gov.br/cnpq/pt-br/acesso-a-informacao/acoes-e-programas/programas/programas-ict/pibiti): “Para se candidatar o estudante precisa estar regularmente matriculado em curso de graduação de instituição de ensino superior pública ou privada, reconhecida pelo Ministério da Educação…“
    `,
  },
  {
    received: /Qual [eé] a diferença entre EAD e ensino remoto?/i,
    description: `Em geral, o ensino remoto é utilizado em um curto período de tempo, diferentemente da EAD, que tem sua estrutura e metodologia pensados para garantir o ensino e a educação a distância. As aulas e atividades remotas são aplicadas pontualmente, nas quais acompanhamos o ensino presencial aplicado em plataformas digitais. Já a EAD foi desenhada para prestar atendimento, aplicar atividades, aulas e outras demandas em um ambiente de aprendizado, com apoio de tutores e recursos tecnológicos que favorecem o ensino.
    `,
  },
  {
    received: /Qual papel d[oa] tutor na EAD?/i,
    description: `Segundo(https://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/21393466/do1-2016-03-14-resolucao-n-1-de-11-de-marco-de-2016-21393306) o § 2º do art. 8º da RESOLUÇÃO Nº 1, DE 11 DE MARÇO DE 2016: “Entende-se por tutor da instituição, na modalidade EaD,todo profissional de nível superior, a ela vinculado, que atue na área de conhecimento de sua formação, como suporte às atividades dos docentes e mediação pedagógica, junto a estudantes, na modalidade de EaD.”
    `,
  },
  {
    received: /Qual papel d[oa] professor na EAD?/i,
    description: `É importante que o professor de cursos a distância tenha familiaridade com o uso dos recursos mais modernos(http://portal.mec.gov.br/component/tags/tag/ensino-a-distancia). Embora a tecnologia não deva ser o centro do processo, é importante ressaltar que as relações na educação a distância são mediadas por instrumentos que vão do material impresso aos mais sofisticados dispositivos. Pode-se contar com todo o aparato tecnológico do tempo presente: os ambientes virtuais de aprendizagem e as ferramentas de comunicação viabilizadas pela interface web.
    `,
  },
  {
    received: /[OA] estudante EAD é contemplad[oa] com a avaliação do ENADE?/i,
    description: `Sim, o ENADE serve como um excelente parâmetro para comprovar que cursos EAD não têm uma qualidade inferior em relação aos presenciais.
    Desde 2007, os dados estatísticos divulgados pelo Censo Estudantil vêm demonstrando que os cursos a distância, em geral, conseguem apresentar um conceito superior no Enade em relação aos cursos presenciais.
    Estudantes de EAD apresentam um rendimento superior em diversos pontos do exame quando comparados aos presenciais.
    `,
  },
  {
    received: /Como [ée] a estrutura administrativa da EAD?/i,
    description: `De um modo geral, a estrutura administrativa da EAD é dividida em:
    Estrutural (gestão estrutural - agentes e prédios, gestão de materiais, condição de trabalho dos docentes, institualização e SI);
    Ensino/Aprendizagem (gestão das atividades dadas aos alunos, formação de docentes, ensino e aprendizagem (aulas) e tempo e espaço);
    Administrativa (equipes multidisciplinares, definição de papéis, projeto pedagógico, gestão de pessoas, gestão do corpo docente e cultura organizacional).
    `,
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

export const handleLinks = (message: string) => {
  const find = messages.find(element => element.received.exec(message));
  const linksInDescription = find?.description.split(' ').filter(element => element.includes('http'));
  console.log(linksInDescription)
  if (find?.links) {
    if (linksInDescription) {
      return  [...find?.links, ...linksInDescription]
    }
    return find.links;
  } else if (linksInDescription) {
    return linksInDescription
  } else {
    return [];
  }
}