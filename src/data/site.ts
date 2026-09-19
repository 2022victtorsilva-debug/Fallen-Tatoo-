import { url } from '../lib/paths';

export const studio = {
  name: 'Fallen Tattoo Studio',
  phone: '+55 71 9278-9350',
  whatsapp: 'https://wa.me/557192789350?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fallen%20Tattoo%20Studio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.',
  instagram: 'https://www.instagram.com/fallentattoostudio?stkn=YWJzaThrczUxZWx0',
  viniciusInstagram: 'https://www.instagram.com/viniciusmedradotattoo?stkn=aWpxenI0MGN5aHFp',
  maps: 'https://share.google/lato1VDbq84Td4JPR',
  address: 'Ed. Santa Cruz - R. do Tesouro, 56 - Centro Histórico, Salvador - BA, 40020-056'
};

export const portfolio = [
  { src: url('/images/02-hero-tattoo-owl.png'), alt: 'Tatuagem de coruja em blackwork no braço', style: 'Blackwork', width: 1229, height: 1536 },
  { src: url('/images/03-portfolio-vinicius-snake-roses.png'), alt: 'Tatuagem de serpente e rosas com traços marcantes', style: 'Blackwork', width: 1229, height: 1536 },
  { src: url('/images/04-portfolio-vinicius-lion-realism.png'), alt: 'Tatuagem de leão em realismo preto e cinza', style: 'Realismo', width: 1229, height: 1536 },
  { src: url('/images/05-portfolio-vinicius-butterfly-lettering.png'), alt: 'Tatuagem delicada com borboleta e lettering', style: 'Fine line', width: 1229, height: 1536 },
  { src: url('/images/06-portfolio-vinicius-lion-geometric.webp'), alt: 'Tatuagem de leão com composição geométrica', style: 'Geométrico', width: 1229, height: 1536 },
  { src: url('/images/07-portfolio-vinicius-anime-sword.webp'), alt: 'Tatuagem inspirada em anime com espada', style: 'Anime', width: 1229, height: 1536 },
  { src: url('/images/08-portfolio-vinicius-ship-color.webp'), alt: 'Tatuagem colorida de navio em linguagem tradicional', style: 'Colorida', width: 1229, height: 1536 },
  { src: url('/images/09-portfolio-vinicius-jesus-blackgrey.webp'), alt: 'Tatuagem religiosa em preto e cinza', style: 'Preto e cinza', width: 1229, height: 1536 }
];

export const services = [
  { title: 'Nova tatuagem personalizada', text: 'Referência, tamanho, região do corpo e estilo são avaliados antes do desenho.', image: portfolio[0] },
  { title: 'Continuação e finalização', text: 'Avaliação do trabalho existente para planejar linhas e acabamento.', image: portfolio[3] },
  { title: 'Cobertura e transformação', text: 'Análise da tattoo atual e das possibilidades de cobertura ou retrabalho.', image: portfolio[1] },
  { title: 'Reforma e revitalização', text: 'Reforço de linhas, contraste e definição em trabalhos antigos.', image: portfolio[2] },
  { title: 'Fechamento de regiões corporais', text: 'Composições maiores planejadas para a anatomia da região.', image: portfolio[4] }
];

export const styles = [
  { title: 'Blackwork e traços marcantes', text: 'Contrastes fortes, massas de preto e desenhos de leitura imediata.', image: portfolio[1] },
  { title: 'Fine line, lettering e delicadas', text: 'Linhas finas, elementos leves e composições tipográficas.', image: portfolio[3] },
  { title: 'Realismo e preto e cinza', text: 'Volume, contraste e profundidade construídos sem depender da cor.', image: portfolio[2] },
  { title: 'Anime e geek', text: 'Personagens e referências visuais reinterpretados para a pele.', image: portfolio[5] },
  { title: 'Geométrico e composições modernas', text: 'Geometria e contraste ajustados à anatomia.', image: portfolio[4] },
  { title: 'Coloridas e autorais', text: 'Cor, contorno e desenhos de leitura marcante.', image: portfolio[6] }
];

export const faqs = [
  { q: 'É normal a tatuagem coçar ou descamar durante a cicatrização?', a: 'Sim. Coceira leve, descamação e pequenas crostas podem fazer parte da regeneração da pele. Não coce nem retire as casquinhas. Siga a orientação recebida no estúdio e procure avaliação médica se notar dor crescente, calor intenso, secreção ou vermelhidão que se espalha.' },
  { q: 'Quais cuidados ajudam a preservar a cor e o brilho?', a: 'Durante a cicatrização, mantenha a área limpa, evite imersão em água, atrito e exposição solar. Depois de cicatrizada, hidratação regular e protetor solar ajudam a reduzir o desbotamento. Use somente os produtos indicados pelo seu tatuador.' },
  { q: 'Tatuagens podem ser feitas em todos os tons de pele?', a: 'Sim. A escolha de pigmentos, contraste e composição deve considerar o tom e as características de cada pele. A avaliação do artista ajuda a adaptar o projeto sem limitar a ideia da pessoa.' },
  { q: 'Posso nadar logo depois de fazer uma tatuagem?', a: 'Não. Durante a cicatrização, evite piscina, mar, sauna, banheira e qualquer imersão prolongada. Água e umidade em excesso podem prejudicar a recuperação da pele e aumentar o risco de complicações.' },
  { q: 'Algumas cores desbotam mais rápido?', a: 'A durabilidade varia com o pigmento, a técnica, a pele, a região do corpo e, principalmente, a exposição ao sol. Cores claras podem mostrar mudanças antes de tons mais escuros. Proteção solar e cuidados contínuos fazem diferença.' },
  { q: 'Como escolher o tamanho ideal da tatuagem?', a: 'O tamanho deve permitir que linhas, espaços e detalhes continuem legíveis com o tempo. Leve sua referência, a região do corpo e a ideia de proporção para a conversa com o artista; o desenho pode ser ajustado antes da execução.' },
  { q: 'Como funciona o orçamento?', a: 'O orçamento é personalizado. Envie pelo WhatsApp sua ideia ou referência, a região do corpo, o tamanho aproximado e o estilo desejado. A equipe avalia o projeto antes de informar o valor.' },
  { q: 'Como faço para agendar?', a: 'O primeiro contato e o alinhamento do projeto são feitos pelo WhatsApp. Depois da avaliação, o estúdio informa as possibilidades de agenda e as condições para confirmar o horário.' }
];

export const posts = [
  {
    slug: 'historia-da-tatuagem', title: 'A história da tatuagem: dos registros antigos à prática contemporânea', date: '30 de maio de 2025', excerpt: 'Um panorama breve sobre como a tatuagem atravessou épocas, povos e significados.', image: portfolio[1],
    intro: 'A tatuagem aparece em diferentes sociedades há milhares de anos. Seus usos variaram entre identidade, proteção simbólica, memória, pertencimento e expressão estética.',
    sections: [
      ['Marcas que atravessam o tempo', 'Registros arqueológicos e históricos mostram práticas de pigmentação da pele em diferentes continentes. Não existe uma única origem: técnicas e sentidos surgiram em contextos diversos.'],
      ['Da tradição ao estúdio contemporâneo', 'Com a evolução das máquinas, pigmentos e protocolos de biossegurança, a tatuagem ganhou novas possibilidades técnicas. Hoje, estilos tradicionais convivem com realismo, blackwork, fine line, anime e composições autorais.'],
      ['Escolha informada', 'Conhecer referências ajuda, mas cada projeto precisa considerar a anatomia, a leitura do desenho e a forma como a pele envelhece. A conversa com o artista transforma repertório em uma solução própria para o corpo.']
    ]
  },
  {
    slug: 'cuidados-pos-tatuagem', title: 'Cuidados pós-tatuagem: do primeiro dia à cicatrização', date: '30 de maio de 2025', excerpt: 'Limpeza, hidratação, proteção e sinais que merecem atenção durante a recuperação da pele.', image: portfolio[3],
    intro: 'A tatuagem é também um processo de recuperação da pele. As orientações do profissional que realizou o trabalho devem ser a referência principal.',
    sections: [
      ['Nos primeiros dias', 'Lave as mãos antes de tocar na área, faça a higienização com delicadeza e seque sem esfregar. Use somente o produto e a proteção indicados pelo tatuador.'],
      ['O que evitar', 'Não coce, não retire casquinhas e evite roupas apertadas. Durante a cicatrização, não mergulhe em piscina, mar, banheira ou sauna e proteja a área do sol.'],
      ['Quando buscar ajuda', 'Dor crescente, calor intenso, secreção, febre ou vermelhidão que se espalha não devem ser ignorados. Procure avaliação médica e comunique o estúdio.']
    ]
  },
  {
    slug: 'tatuagem-doi-regioes-do-corpo', title: 'Tatuagem dói? O que muda entre as regiões do corpo', date: '30 de maio de 2025', excerpt: 'A sensibilidade varia com a região, o tipo de trabalho e a resposta individual de cada pessoa.', image: portfolio[4],
    intro: 'Não existe uma escala de dor que funcione igual para todo mundo. Espessura da pele, proximidade de osso, duração da sessão e estado físico influenciam a experiência.',
    sections: [
      ['Regiões mais sensíveis', 'Áreas próximas a ossos, dobras e regiões com muitas terminações nervosas costumam ser percebidas como mais intensas. Isso não significa que o projeto seja inviável.'],
      ['Antes da sessão', 'Durma bem, alimente-se e mantenha-se hidratado. Evite álcool e não use anestésicos ou outros produtos sem autorização do estúdio.'],
      ['Converse com o artista', 'Pausas e duração de sessão podem ser planejadas conforme o projeto. Conte ao profissional como você está se sentindo ao longo do procedimento.']
    ]
  },
  {
    slug: 'quanto-custa-fazer-tatuagem', title: 'Quanto custa fazer uma tatuagem?', date: '30 de maio de 2025', excerpt: 'Entenda por que tamanho, região, estilo e complexidade fazem parte de um orçamento personalizado.', image: portfolio[6],
    intro: 'A Fallen não usa tabela fixa porque projetos diferentes exigem desenho, preparação e tempo de execução distintos.',
    sections: [
      ['O que entra na avaliação', 'A referência, o tamanho aproximado, a região do corpo, o nível de detalhe, o uso de cor e a necessidade de cobertura ou retrabalho ajudam a dimensionar o projeto.'],
      ['Por que avaliar antes', 'Uma conversa breve evita promessas imprecisas e permite verificar se a ideia funciona no tamanho e na área desejados. Em coberturas, a análise da tatuagem existente é indispensável.'],
      ['Como pedir seu orçamento', 'Envie pelo WhatsApp a ideia ou referência, a região do corpo, o tamanho aproximado e o estilo. A equipe responde com os próximos passos.']
    ]
  }
];

export const terms = [
  { id: 'escopo', title: '1. Objeto e escopo', body: 'Os termos regulamentam agendamento, criação de artes e execução de tatuagens pela Fallen Tattoo Studio. O estúdio não realiza serviços de piercing ou outras modificações corporais.' },
  { id: 'idade', title: '2. Idade e documentação', body: 'O atendimento é destinado a maiores de 18 anos. Menores dependem de autorização escrita dos responsáveis, cópia dos documentos e presença física do responsável durante o procedimento. Documento original com foto é obrigatório.' },
  { id: 'orcamentos', title: '3. Orçamentos e pagamentos', body: 'Os orçamentos têm validade de 15 dias e podem ser reajustados após esse prazo. A confirmação do horário depende do sinal de 50%; o saldo é quitado no dia do atendimento, salvo acordo prévio para projetos com várias sessões. São aceitos dinheiro, Pix, débito e crédito; parcelamentos podem incluir taxas da operadora.' },
  { id: 'cancelamentos', title: '4. Cancelamentos, remarcações e atrasos', body: 'Cancelamentos com mais de 48 horas permitem reembolso do sinal em até 10 dias úteis ou crédito válido por 90 dias. Com menos de 48 horas, o sinal é retido. A remarcação pode ser feita uma vez com antecedência mínima de 48 horas e depende de disponibilidade. Há tolerância de 30 minutos para atrasos. Contratações à distância observam o direito de arrependimento previsto no art. 49 do CDC.' },
  { id: 'saude', title: '5. Saúde e preparo', body: 'O cliente deve informar gravidez, amamentação, doenças, uso de medicamentos, alergias e outras condições relevantes. O estúdio pode recusar o atendimento quando houver risco. Não devem ser aplicados anestésicos, pomadas ou outros produtos sem autorização. Recomenda-se chegar alimentado, hidratado e descansado, sem consumo de álcool ou outras substâncias nas 24 horas anteriores.' },
  { id: 'biosseguranca', title: '6. Biossegurança', body: 'Materiais perfurocortantes e descartáveis são de uso único; equipamentos reutilizáveis passam por limpeza, desinfecção e esterilização. O ambiente e as superfícies são higienizados entre atendimentos. Produtos sujeitos à vigilância sanitária devem estar regularizados, e resíduos são destinados conforme as regras aplicáveis.' },
  { id: 'cuidados', title: '7. Cuidados e cicatrização', body: 'O cliente recebe orientações de cuidados e é responsável por segui-las. Sol, imersão em água, atrito, produtos não indicados e retirada de crostas podem prejudicar a cicatrização. Em caso de suspeita de complicação, deve procurar atendimento médico e informar o estúdio.' },
  { id: 'retoques', title: '8. Avaliação de retoques', body: 'Pedidos de avaliação podem ser feitos em até 90 dias após a última sessão. Falhas técnicas confirmadas podem receber retoque sem custo quando os cuidados foram seguidos. Problemas decorrentes de negligência, características individuais da pele ou áreas de alto desgaste podem exigir novo orçamento.' },
  { id: 'direitos', title: '9. Direitos autorais', body: 'Os direitos autorais dos desenhos originais permanecem com o estúdio e seus artistas. O pagamento do serviço não autoriza reprodução, modificação, distribuição ou uso comercial sem consentimento expresso. Referências fornecidas pelo cliente devem respeitar direitos de terceiros.' },
  { id: 'imagem', title: '10. Imagem e portfólio', body: 'Fotos e vídeos do procedimento ou do resultado podem ser usados em portfólio e divulgação, sem identificar dados pessoais do cliente. Quem não quiser a divulgação deve solicitar sigilo por escrito antes do procedimento, conforme o termo disponibilizado pelo estúdio.' },
  { id: 'responsabilidade', title: '11. Limites de responsabilidade', body: 'O estúdio não se responsabiliza por reações decorrentes de alergias omitidas, descumprimento dos cuidados posteriores ou fatores biológicos individuais. Os profissionais não prescrevem nem administram medicamentos; necessidades médicas devem ser tratadas com profissional habilitado.' },
  { id: 'dados', title: '12. Dados pessoais', body: 'Dados necessários ao atendimento, à avaliação de saúde e às obrigações legais e sanitárias são tratados conforme a LGPD. O titular pode solicitar acesso, correção, bloqueio, anonimização ou eliminação quando não houver obrigação legal de retenção. Comunicações de marketing dependem de consentimento separado.' },
  { id: 'conduta', title: '13. Acompanhantes e conduta', body: 'É permitido um acompanhante maior de 18 anos na área indicada, sem interferência no procedimento. Crianças não permanecem na área de atendimento. Clientes e acompanhantes devem manter conduta respeitosa; não é permitido fumar, consumir álcool ou substâncias ilícitas no estúdio.' },
  { id: 'disposicoes', title: '14. Comunicações e disposições gerais', body: 'Dúvidas e reclamações devem usar os canais oficiais informados no site. Os termos podem ser atualizados, respeitada a versão vigente na confirmação do agendamento. As partes buscarão solução amigável antes de medidas judiciais, observado o foro competente e a legislação de defesa do consumidor.' }
];
