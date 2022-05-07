const results = [
  {
    title: "Qual é o significado da sigla EAD?",
    received: /qual [eé] o significado da sigla ead?/i,
    description: `A sigla EAD significa Educação a Distância. Essa modalidade permite com que as aulas sejam realizadas a distância de forma remota.`,
    image: 'https://blog.sesisenai.org.br/wp-content/uploads/2021/02/o-que-e-curso-ead-e-como-funciona.jpg',
  },
  {
    title: "O que é EAD?",
    received: /o que [ée] ead?|o que [ée] educa[çc][ãa]o [aáà] dist[aâ]ncia/i,
    description: `De acordo com o artigo 1º do decreto N.º 2.494, DE 10 DE FEVEREIRO DE 1998: "Educação a distância é uma forma de ensino que possibilita a autoaprendizagem, com a mediação de recursos didáticos sistematicamente organizados, apresentados em diferentes suportes de
    informação, utilizados isoladamente ou combinados, e veiculados pelos diversos meios de comunicação.
    Parágrafo Único – Os cursos ministrados sob a forma de educação a distância serão organizados em regime especial, com flexibilidade de requisitos para admissão, horários e duração, sem prejuízo, quando for o caso, dos objetivos e das diretrizes curriculares fixadas nacionalmente."`,
    image: 'https://1.bp.blogspot.com/-RRfTMK4b5hE/WTid2XPn33I/AAAAAAAAAkE/UZpssED54AI11XDj2HoQVZJ4q2ogJt5OwCLcB/s1600/7pga9p5s3ayjas8uyfes.png',
    links: ['http://www.planalto.gov.br/ccivil_03/decreto/d2494.htm']
  },
  {
    title: "Qual é o objetivo da EAD?",
    received: /Qual [eé] o objetivo da ead/i,
    description: `O principal objetivo da EaD é oferecer um ensino de qualidade, dinâmico, completo e eficiente através de meios tecnológicos como a internet, vídeo aulas, entre outros. O professor e o aluno não se comunicam pessoalmente, mas mantém um contato constante e eficiente, que faz o ensino ser completo e eficaz. a plataforma Moodle, por exemplo, que serve como uma sala de aula virtual, oferece um ensino completamente inovador utilizando desse ambiente virtual de aprendizagem, que não é focado na tradição e no regime presencial.`,
    image: require('../assets/images/meninafeliz.png'),
  },
]


export default results;