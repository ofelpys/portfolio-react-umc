// Portfólio feito com um componente React e uma lista simples de projetos.
const projetos = [
  { nome: 'ForçaMente', descricao: 'Meu projeto final de curso. Uma plataforma de informação e capacitação para iniciantes na musculação.', tecnologias: 'React · Java · Spring Boot', link: 'https://github.com/ofelpys/PFC-FRONTEND' },
  { nome: 'Força Total', descricao: 'Projeto de gestão de academias da disciplina de Paradigmas de Orientação a Objetos, que já aparecia no meu primeiro portfólio.', tecnologias: 'React · Java · PostgreSQL', link: 'https://github.com/ofelpys/M1_software_IA' },
  { nome: 'Login Seguro', descricao: 'Aplicação acadêmica com cadastro, login e controle de acesso por perfil de usuário.', tecnologias: 'Java · Spring Security · MongoDB', link: 'https://github.com/ofelpys/login-seguro' },
  { nome: 'BrasilAPI', descricao: 'Atividade de Programação para Internet para praticar JavaScript e o uso de uma API.', tecnologias: 'HTML · CSS · JavaScript', link: 'https://github.com/ofelpys/atividade-brasilAPI' },
];

function App() {
  return (
    <>
      <header className="cabecalho">
        <a href="#inicio" aria-label="Voltar ao início"><img src="/img/logo-umc.png" alt="Universidade de Mogi das Cruzes" className="logo-umc" /></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre mim</a><a href="#tecnologias">Tecnologias</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="inicio">
        <section id="sobre" className="apresentacao">
          <h1><span>Felipe Costa Monteiro</span><br />Portfólio</h1>
          <img className="minha-foto" src="/felipe-github.jpg" alt="Foto de Felipe Costa Monteiro" />
          <h2>Sobre mim:</h2>
          <p>Olá! Sou Felipe, estudante do <strong>8º semestre de Sistemas de Informação na UMC</strong>. Estou no último ano do curso e busco uma oportunidade para começar minha carreira na área de tecnologia.</p>
          <p>Trabalhei durante 10 anos na Panco. Hoje estudo programação e procuro colocar em prática o que aprendo na faculdade por meio dos meus projetos.</p>
        </section>

        <section id="tecnologias" className="secao">
          <h2>Minhas tecnologias</h2>
          <p>Essas são algumas das ferramentas que estudo e uso nos meus projetos:</p>
          <div className="lista-tecnologias" aria-label="Tecnologias">
            <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span><span>MongoDB</span>
          </div>
        </section>

        <section id="projetos" className="secao">
          <h2>Meus projetos</h2>
          <p>Alguns trabalhos que fiz durante a graduação:</p>
          <div className="lista-projetos">
            {projetos.map((projeto) => (
              <article className="projeto" key={projeto.nome}>
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                <p className="tecnologias-projeto">{projeto.tecnologias}</p>
                <a className="botao" href={projeto.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="secao contato">
          <h2>Contato</h2>
          <p>Gostou dos meus projetos? Entre em contato comigo:</p>
          <a className="botao" href="mailto:felipecostamonteiro@gmail.com">Enviar e-mail</a>
          <a className="botao" href="https://www.linkedin.com/in/felipe-monteiro-4ab5721a4/" target="_blank" rel="noopener noreferrer">Meu LinkedIn</a>
          <a className="botao" href="https://github.com/ofelpys" target="_blank" rel="noopener noreferrer">Meu GitHub</a>
        </section>
      </main>

      <footer>Feito por Felipe Costa Monteiro · Sistemas de Informação / UMC</footer>
    </>
  );
}

export default App;
