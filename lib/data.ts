export const siteConfig = {
  name: "Agatha Pinheiro",
  role: "Desenvolvimento Web",
  slogan: "Tecnologia feita para impulsionar negócios.",
  email: "agathapdev@gmail.com",
  whatsapp: "5521987103449",
  instagram: "@agathapinheiro.dev",
  instagramUrl: "https://instagram.com/agathapinheiro.dev",
  github: "",
  linkedin: "",
  siteUrl: "",
};

export const services = [
  { number: "01", icon: "web", title: "Desenvolvimento web", description: "Sites modernos, responsivos e personalizados para apresentar sua marca com clareza." },
  { number: "02", icon: "system", title: "Sistemas personalizados", description: "Soluções digitais construídas de acordo com os processos e necessidades do seu negócio." },
  { number: "03", icon: "landing", title: "Landing pages", description: "Páginas estratégicas para comunicar uma oferta e conduzir visitantes à ação." },
  { number: "04", icon: "automation", title: "Automações", description: "Soluções para reduzir tarefas manuais e tornar a operação mais fluida." },
  { number: "05", icon: "maintenance", title: "Manutenção e melhorias", description: "Correções, atualizações e evolução contínua para projetos já existentes." },
];

export const processSteps = [
  ["01", "Conversa", "Entender necessidade, objetivo e contexto."],
  ["02", "Planejamento", "Definir estrutura, funcionalidades e solução."],
  ["03", "Desenvolvimento", "Construir a solução com atenção aos detalhes."],
  ["04", "Ajustes", "Validar, ouvir e aperfeiçoar o resultado."],
  ["05", "Entrega", "Finalizar e disponibilizar o projeto."],
];

export type Project = {
  id: string; title: string; category: string; shortDescription: string; description: string;
  challenge: string; solution: string; features: string[]; technologies: string[];
  status: string; images: string[]; demoUrl: string; githubUrl: string;
};

export const projects: Project[] = [
  { id: "dg-moura-cell", title: "DG Moura Cell", category: "Desenvolvimento web / Sistema / Soluções digitais", shortDescription: "Projeto preparado para apresentar uma solução digital com clareza e personalidade.", description: "Um espaço reservado para documentar o projeto DG Moura Cell com as informações confirmadas e imagens reais.", challenge: "As informações detalhadas do projeto ainda serão adicionadas.", solution: "A estrutura do case está pronta para receber contexto, decisões e aprendizados reais.", features: ["Case preparado para documentação real", "Galeria para imagens do projeto"], technologies: [], status: "Informações em atualização", images: [], demoUrl: "", githubUrl: "" },
  { id: "alebronze", title: "AleBronze", category: "Projeto selecionado", shortDescription: "Uma apresentação organizada para receber o contexto verdadeiro do projeto AleBronze.", description: "Este case foi preparado para crescer com imagens, detalhes e aprendizados reais do projeto.", challenge: "Informações detalhadas ainda não fornecidas.", solution: "Estrutura editorial pronta para receber a história real da solução.", features: ["Apresentação de projeto", "Galeria preparada"], technologies: [], status: "Informações em atualização", images: [], demoUrl: "", githubUrl: "" },
  { id: "atelie-malaka", title: "Ateliê Malaka", category: "Projeto selecionado", shortDescription: "Um lugar reservado para apresentar o trabalho desenvolvido para o Ateliê Malaka.", description: "O conteúdo deste case será preenchido apenas com informações confirmadas e materiais reais.", challenge: "Informações detalhadas ainda não fornecidas.", solution: "Case modular pronto para receber imagens e detalhes verdadeiros.", features: ["Case modular", "Galeria preparada"], technologies: [], status: "Informações em atualização", images: [], demoUrl: "", githubUrl: "" },
  { id: "sistema-processos", title: "Sistema de Processos", category: "Sistema personalizado", shortDescription: "Uma solução preparada para documentar a organização de processos quando os detalhes forem confirmados.", description: "A estrutura de apresentação está pronta para receber a descrição real do sistema.", challenge: "Informações detalhadas ainda não fornecidas.", solution: "Apresentação focada em contexto, solução e funcionalidades confirmadas.", features: ["Estrutura de case", "Detalhes expansíveis"], technologies: [], status: "Informações em atualização", images: [], demoUrl: "", githubUrl: "" },
];

export const testimonials = [
  ["Feedback 01", "A comunicação durante o projeto foi clara desde o início. A solução foi desenvolvida pensando nas necessidades do negócio, com atenção aos detalhes e à experiência de quem vai utilizar."],
  ["Feedback 02", "O projeto transformou uma necessidade que parecia complexa em uma solução mais organizada, prática e fácil de utilizar. O resultado trouxe mais clareza para o processo."],
  ["Feedback 03", "Gostei principalmente da atenção aos detalhes e da preocupação em entender o problema antes de começar a desenvolver. O resultado ficou alinhado ao que o projeto precisava."],
];

export const faqs = [
  ["Você trabalha com projetos personalizados?", "Sim. Cada projeto começa com uma conversa para entender o contexto e definir uma solução adequada à necessidade apresentada."],
  ["Você desenvolve sites responsivos?", "Sim. Os projetos são pensados para funcionar com clareza em diferentes tamanhos de tela."],
  ["Você cria landing pages?", "Sim. Landing pages podem ser desenvolvidas para apresentar uma oferta, serviço ou campanha com foco em conversão."],
  ["Você desenvolve sistemas personalizados?", "Sim. Sistemas podem ser planejados a partir dos processos e objetivos específicos de cada negócio."],
  ["Você trabalha com automações?", "Sim. A automação pode ajudar a reduzir tarefas manuais e organizar fluxos repetitivos."],
  ["Você faz manutenção em sistemas existentes?", "Sim. É possível avaliar correções, atualizações e melhorias em projetos existentes."],
  ["Como funciona o orçamento?", "Depois de entender o projeto, as necessidades e o escopo, conversamos sobre a melhor forma de seguir. O orçamento é personalizado."],
  ["Como posso entrar em contato?", "Você pode usar o formulário desta página para abrir uma conversa no WhatsApp ou enviar um e-mail diretamente."],
];
