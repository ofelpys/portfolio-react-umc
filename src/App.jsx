import { useEffect, useRef, useState } from 'react';
import { profile, projects, stacks } from './data.js';

function Icon({ name = 'arrow', size = 20, ...props }) {
  const paths = {
    arrow: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    diagonal: <><path d="M6 18 18 6M6 6h12v12" /></>,
    code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3 0 6-1 6-5a4 4 0 0 0-1-3 4 4 0 0 0 0-3s-1 0-3 1a11 11 0 0 0-6 0C8 4 7 4 7 4a4 4 0 0 0 0 3 4 4 0 0 0-1 3c0 4 3 5 6 5a3.5 3.5 0 0 0-1 3v4" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M15 8V4H4v11h4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    lock: <><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

function ExternalLink({ href, children, className = '', ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>{children}</a>;
}

function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{children && <p className="section-intro">{children}</p>}</div>;
}

function ProjectArt({ type }) {
  return <div className={`project-art art-${type}`} aria-hidden="true">
    <div className="art-grid" />
    {type === 'force' && <><div className="force-word">FORÇA<span>MENTE</span><span className="force-dot">✳</span></div><div className="art-caption">MOVIMENTO. CONHECIMENTO. EVOLUÇÃO.</div></>}
    {type === 'secure' && <><div className="lock-orbit"><Icon name="lock" size={54} /></div><span className="secure-tag"><span className="status-dot"/> acesso autorizado</span></>}
    {type === 'api' && <div className="api-code"><span className="api-method">GET</span><span>brasilapi.com.br</span><div><span className="code-purple">&#123;</span><br/>&nbsp; <span className="code-muted">"conexão"</span>: <span className="code-green">"estabelecida"</span>,<br/>&nbsp; <span className="code-muted">"possibilidades"</span>: <span className="code-coral">∞</span><br/><span className="code-purple">&#125;</span></div></div>}
    {type === 'total' && <><div className="total-mark">FT<span>↗</span></div><div className="art-caption">FORÇA TOTAL / GESTÃO DE ACADEMIAS</div></>}
  </div>;
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <ProjectArt type={project.visual} />
    <div className="project-content"><p className="project-label">{project.label}<span>{project.number}</span></p>
      <h3>{project.name}<span className="project-category">{project.category}</span></h3>
      <p className="project-description">{project.description}</p>
      <ul className="tag-list" aria-label="Tecnologias do projeto">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="project-links">{project.links.map(link => <ExternalLink key={link.href} href={link.href} aria-label={`${link.label}: ${project.name} (nova aba)`}>{link.label}<Icon name="diagonal" size={17}/></ExternalLink>)}</div>
    </div>
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [filter, setFilter] = useState('Todos');
  const [copyStatus, setCopyStatus] = useState('');
  const menuButton = useRef(null);
  const copyTimer = useRef(null);
  const visibleProjects = projects.filter(project => filter === 'Todos' || project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => { observer.disconnect(); clearTimeout(copyTimer.current); };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = event => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  async function copyEmail() {
    clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('E-mail copiado!');
    } catch {
      setCopyStatus('Não foi possível copiar. Selecione o e-mail acima ou use o botão de contato.');
    }
    copyTimer.current = setTimeout(() => setCopyStatus(''), 5000);
  }

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header"><div className="container header-inner">
      <a className="brand" href="#inicio" aria-label="Felipe Monteiro, início">fm<span>.</span></a>
      <button className="menu-toggle" type="button" ref={menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      <nav id="main-nav" aria-label="Navegação principal" className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
        {[['sobre','Sobre'],['stack','Stack'],['projetos','Projetos']].map(([id,label]) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar <Icon name="diagonal" size={16}/></a>
      </nav>
    </div></header>

    <main id="conteudo">
      <section id="inicio" className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="availability"><span className="status-dot"/> Aberto a oportunidades</p>
          <p className="hero-name">OLÁ, EU SOU FELIPE COSTA MONTEIRO</p>
          <h1 id="hero-title">Da ideia<br/>ao <span>código<span className="title-period">.</span></span></h1>
          <p className="hero-description">Desenvolvedor em formação. Conecto o que aprendo em <strong>Sistemas de Informação na UMC</strong> à construção de aplicações para a web.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projetos">Conheça meus projetos <Icon name="arrow"/></a><ExternalLink className="icon-link" href={profile.github} aria-label="GitHub de Felipe Monteiro (nova aba)"><Icon name="github" size={23}/></ExternalLink><ExternalLink className="icon-link" href={profile.linkedin} aria-label="LinkedIn de Felipe Monteiro (nova aba)"><Icon name="linkedin" size={23}/></ExternalLink></div>
          <div className="hero-meta"><span>8º semestre <span className="meta-dot">·</span> Último ano</span><span>React <span className="meta-dot">/</span> Java <span className="meta-dot">/</span> Spring Boot</span></div>
        </div>
        <div className="hero-visual"><div className="portrait-frame"><img src="/felipe-github.jpg" width="460" height="460" alt="Felipe Costa Monteiro em seu ambiente de estudos e tecnologia" fetchPriority="high"/><div className="portrait-overlay"/><div className="portrait-name"><span>FELIPE MONTEIRO</span><span>ESTUDANTE & DESENVOLVEDOR</span></div><span className="portrait-corner"/></div>
          <div className="floating-label"><Icon name="code" size={24}/><div>Aprender. Construir. Evoluir.<span>Um projeto de cada vez.</span></div></div>
          <span className="visual-index" aria-hidden="true">PORTFÓLIO — VOL. 2026</span>
        </div>
        <a className="scroll-link" href="#sobre"><Icon name="down" size={16}/> Continue explorando</a>
      </section>

      <div className="stack-strip" aria-hidden="true"><div className="container"><span>REACT</span><i>✳</i><span>JAVA</span><i>✳</i><span>SPRING BOOT</span><i>✳</i><span>JAVASCRIPT</span><i>✳</i><span>POSTGRESQL</span></div></div>

      <section id="sobre" className="section container" aria-labelledby="about-title">
        <div className="about-grid"><div><p className="eyebrow"><span>01 /</span> SOBRE MIM</p><h2 id="about-title">Curiosidade que<br/>vira <em>construção.</em></h2><div className="university"><span className="umc-word">UMC<span>UNIVERSIDADE DE<br/>MOGI DAS CRUZES</span></span><p>Sistemas de Informação<br/><strong>8º semestre · Último ano</strong></p></div></div>
          <div className="about-copy"><p>Sou Felipe Costa Monteiro, estudante do último ano de <strong>Sistemas de Informação na Universidade de Mogi das Cruzes</strong>. Estou construindo minha trajetória em tecnologia por meio de estudos e projetos práticos.</p><p>Minha experiência profissional anterior inclui uma passagem pela <strong>Panco</strong>. Hoje, busco uma oportunidade para aplicar meus conhecimentos, aprender com uma equipe e contribuir com o desenvolvimento de soluções.</p><p>Na graduação, meu foco está em desenvolvimento web, orientação a objetos, integração de APIs e bancos de dados. Gosto de acompanhar uma ideia desde a interface até a lógica que faz tudo funcionar.</p><a className="text-link" href="#contato">Vamos construir algo juntos <Icon name="diagonal" size={18}/></a></div>
        </div>
      </section>

      <section id="stack" className="section stack-section" aria-labelledby="stack-title"><div className="container">
        <SectionHeading number="02" label="MINHA STACK" title={<span id="stack-title">As ferramentas da jornada<span className="accent">.</span></span>}>Tecnologias que estudo e aplico em projetos acadêmicos e pessoais.</SectionHeading>
        <div className="stack-list">{stacks.map(stack => <article className="stack-row" key={stack.number}><span className="row-number">{stack.number}</span><div className="stack-description"><h3>{stack.title}</h3><p>{stack.description}</p></div><ul className="stack-tags">{stack.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        <p className="stack-note"><span className="status-dot"/> Em aprendizado contínuo, com prática documentada no GitHub.</p>
      </div></section>

      <section id="projetos" className="section container" aria-labelledby="projects-title">
        <SectionHeading number="03" label="PROJETOS SELECIONADOS" title={<span id="projects-title">Aprendizado em prática<span className="accent">.</span></span>}>Uma seleção do que venho construindo ao longo da graduação.</SectionHeading>
        <div className="project-toolbar"><div className="filters" role="group" aria-label="Filtrar projetos por categoria">{['Todos','Full stack','Front-end','Back-end'].map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)} className={filter === item ? 'filter active' : 'filter'}>{item}</button>)}</div><span className="project-count" role="status" aria-live="polite">{String(visibleProjects.length).padStart(2,'0')} projetos</span></div>
        <div className="projects-grid">{visibleProjects.map(project => <ProjectCard key={project.id} project={project}/>)}</div>
        <div className="all-projects"><ExternalLink href={profile.github} className="text-link">Mais estudos e projetos no GitHub <Icon name="diagonal" size={18}/></ExternalLink></div>
      </section>

      <section id="contato" className="contact-section" aria-labelledby="contact-title"><div className="container contact-inner"><div><p className="eyebrow"><span>04 /</span> PRÓXIMO PASSO</p><h2 id="contact-title">Uma boa conversa.<br/>Uma nova <em>possibilidade.</em></h2><p>Estou em busca de uma oportunidade em tecnologia.<br/>Tem um projeto, uma vaga ou uma ideia? Vamos conversar.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Entre em contato <Icon name="diagonal"/></a></div><div className="contact-details"><span className="contact-label">ME ENCONTRE POR AQUI</span><ExternalLink href={profile.linkedin}>LinkedIn <Icon name="diagonal"/></ExternalLink><ExternalLink href={profile.github}>GitHub <Icon name="diagonal"/></ExternalLink><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" className="copy-button" onClick={copyEmail} aria-label="Copiar endereço de e-mail"><Icon name={copyStatus === 'E-mail copiado!' ? 'check' : 'copy'} size={18}/></button></div><p className="copy-status" role="status" aria-live="polite">{copyStatus}</p></div></div></section>
    </main>
    <footer className="container footer"><a className="brand" href="#inicio" aria-label="Voltar ao início">fm<span>.</span></a><p>© {new Date().getFullYear()} Felipe Costa Monteiro</p><p>Feito com React, café e vontade de aprender<span className="accent">.</span></p><a href="#inicio" className="back-top">Voltar ao topo <Icon name="diagonal" size={16}/></a></footer>
  </>;
}
