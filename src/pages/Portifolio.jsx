import '../pages/App.css'
import { useEffect, useState } from 'react'
import todoListImg from '../assets/imgs/ToDo List.png'
import vexorLogoImg from '../assets/imgs/LogoVexor.png'
import safeLogoImg from '../assets/imgs/Safe.png'
import Curriculo from '../assets/pdf/Curriculo_Lucas.pdf?url'
import profileImg from '../assets/profile.png'

function Portifolio() {
  const headingText = 'Olá, me chamo\nLucas Bitencourt'
  const [typedHeading, setTypedHeading] = useState('')
  const [activeSection, setActiveSection] = useState('inicio')
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [contactStatus, setContactStatus] = useState('')

  useEffect(() => {
    let characterIndex = 0
    const typingTimer = window.setInterval(() => {
      characterIndex += 1
      setTypedHeading(headingText.slice(0, characterIndex))

      if (characterIndex === headingText.length) {
        window.clearInterval(typingTimer)
      }
    }, 85)

    return () => window.clearInterval(typingTimer)
  }, [])

  useEffect(() => {
    const sections = ['inicio', 'sobre', 'skills', 'projetos', 'contato']
    const sectionObserver = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

      if (visibleSection) setActiveSection(visibleSection.target.id)
    }, { threshold: [0.2, 0.5, 0.8] })

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) sectionObserver.observe(section)
    })

    return () => sectionObserver.disconnect()
  }, [])

  const handleContactSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = `Contato pelo portfólio de ${name}`
    const body = `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`

    window.location.href = `mailto:bitencourt.lucas@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setContactStatus('Seu aplicativo de e-mail foi aberto com a mensagem preenchida.')
    event.currentTarget.reset()
  }

  useEffect(() => {
    document.documentElement.dataset.theme = isLightTheme ? 'light' : 'dark'
  }, [isLightTheme])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 280)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal-on-scroll').forEach((section) => {
      revealObserver.observe(section)
    })

    return () => revealObserver.disconnect()
  }, [])

  return (  
    <div
      className="container"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
        event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
      }}
    >
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Voltar ao início"><span className="brand-mark">LB</span><span>.</span></a>
        <nav className="main-nav" aria-label="Navegação principal">
          {['sobre', 'skills', 'projetos', 'contato'].map((section) => (
            <a className={activeSection === section ? 'active' : ''} href={`#${section}`} key={section}>
              <span>0{['sobre', 'skills', 'projetos', 'contato'].indexOf(section) + 1}</span>{section}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => setIsLightTheme((theme) => !theme)} aria-label="Alternar tema">
            {isLightTheme ? '☾' : '☼'}
          </button>
          <a className="header-linkedin" href="https://www.linkedin.com/in/bitencourtlucas/" target="_blank" rel="noopener noreferrer">in ↗</a>
        </div>
      </header>

      <main>
      <div className="hero" id="inicio">
        <div className="hero-visual">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="visual-label visual-label-top">UI / UX</span>
          <span className="visual-label visual-label-bottom">BUILD 2026</span>
          <a className="github-link" href="https://www.linkedin.com/in/bitencourtlucas/" target="_blank" rel="noopener noreferrer">
            <img className="github-image" src={profileImg} alt="Foto Lucas Bitencourt" />
          </a>
        </div>
        <div className="hero-text">
          <p className="eyebrow"><span className="status-dot" /> DISPONÍVEL PARA OPORTUNIDADES</p>
          <h1 className="Title" aria-label={headingText.replace('\n', ' ')} aria-live="polite">
            {typedHeading.split('\n').map((line, index) => (
              <span className="title-line" key={line}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
            <span className="typing-cursor" aria-hidden="true">|</span>
          </h1>
          <p className='subtitle'>Desenvolvedor Frontend | Flutter • React • Figma • UI/UX |<br />Lógica de Programação Sólida</p>
          <div className="contact-buttons">
            <a className="contact-btn-Curriculo" href={Curriculo} download target="_blank" rel="noopener noreferrer">Currículo</a>
            <a className="contact-btn-linkedin" href="https://www.linkedin.com/in/bitencourtlucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="contact-btn-github" href="https://github.com/Lkzin0122" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="hero-meta">
            <span><strong>03</strong> projetos autorais</span>
            <span><strong>13</strong> tecnologias</span>
          </div>
        </div>
      </div>

     
      
      <section className="about-section reveal-on-scroll" id="sobre">
        <p className="section-kicker">01 / PERFIL</p>
        <div className="section-heading">
          <h2 className="about-title">Sobre mim</h2>
          <span className="section-index">01</span>
        </div>
      
        <div className="about-content">
          <div className="hero-terminal about-terminal" aria-label="Resumo técnico">
            <div className="terminal-bar"><span /><span /><span /><small>lucas@portfolio:~</small></div>
            <div className="terminal-about-text">
              <p>Olá, me chamo Lucas Bitencourt, tenho 18 anos, sou de São Paulo e possuo curso Técnico em Informática pela instituição FIEB. Sou um entusiasta de tecnologia e programação, com experiência prática no desenvolvimento de aplicações front-end, back-end e mobile.</p>
              <p>Durante minha formação, tive contato direto com linguagens, frameworks e conceitos usados no mercado de trabalho. Também participei de projetos práticos que me permitiram aplicar meus conhecimentos em situações reais, desenvolvendo habilidades de resolução de problemas e trabalho em equipe.</p>
              <p>Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para me tornar um profissional cada vez mais completo e preparado para os desafios do mercado de trabalho.<span className="terminal-cursor">_</span></p>
            </div>
          </div>
        </div>
      </section>
       

      <section className="skills-section reveal-on-scroll" id="skills">
        <p className="section-kicker">02 / FERRAMENTAS</p>
        <div className="section-heading">
          <h2>Skills</h2>
          <span className="section-index">02</span>
        </div>
        <div className="skills-showcase">
          <div className="skills-showcase-head">
            <div>
              <p className="skills-intro-label">O QUE EU USO</p>
              <h3>Meu conjunto de<br /><em>ferramentas.</em></h3>
            </div>
            <p>Tecnologias que fazem parte do meu processo para criar interfaces, aplicações e experiências digitais.</p>
          </div>
          <div className="skill-columns">
            <div className="skill-column">
              <span className="skill-column-number">01</span>
              <h3>Frontend</h3>
              <p>Interfaces rápidas, responsivas e fáceis de usar.</p>
              <div className="skill-column-items">
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />React</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />JavaScript</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />HTML</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />CSS</span>
              </div>
            </div>
            <div className="skill-column">
              <span className="skill-column-number">02</span>
              <h3>Backend & mobile</h3>
              <p>Estruturas para dar vida e consistência aos produtos.</p>
              <div className="skill-column-items">
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="" />Java</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="" />Spring Boot</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="" />Flutter</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="" />Dart</span>
              </div>
            </div>
            <div className="skill-column">
              <span className="skill-column-number">03</span>
              <h3>Design & fluxo</h3>
              <p>Do primeiro rascunho até a entrega organizada.</p>
              <div className="skill-column-items">
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="" />Figma</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />Git</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="" />SQL Server</span>
                <span><img src="https://vitejs.dev/logo.svg" alt="" />Vite</span>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="projects-section reveal-on-scroll" id="projetos">
        <p className="section-kicker">03 / TRABALHOS SELECIONADOS</p>
        <div className="section-heading">
          <h2>Projetos</h2>
          <span className="section-index">03</span>
        </div>
        <div className="projects-grid">
          <div className="project-item project-item-compact">
            <a className="project-visual safe-visual" href="https://github.com/Lkzin0122/safe_solutions_flutter" target="_blank" rel="noopener noreferrer">
              <img className="safe-logo" src={safeLogoImg} alt="Logo Safe Solutions" />
            </a>
             <div className="project-info">
               <h3>Safe Solutions</h3>
               <p>Plataforma de gestão de serviços criada como TCC para aproximar empresas e clientes. O sistema reúne um painel administrativo web, uma API REST e um aplicativo mobile, permitindo cadastrar serviços, atualizar status e acompanhar o andamento das solicitações com mais transparência.</p>
               <div className="project-tags">
                 <span>Flutter</span>
                 <span>React</span>
                 <span>Spring Boot</span>
                 <span>SQL Server</span>
               </div>
               <a className="project-link" href="https://github.com/Lkzin0122/safe_solutions_flutter" target="_blank" rel="noopener noreferrer">Ver projeto no GitHub ↗</a>
             </div>
           </div>
           <div className="project-item">
             <a className="project-visual" href="https://github.com/Lkzin0122/to-do-list" target="_blank" rel="noopener noreferrer">
               <img src={todoListImg} alt="To-Do List" className="project-img project-img-todo" />
             </a>
             <div className="project-info">
               <h3>To-Do List <span>(Em desenvolvimento)</span></h3>
               <p>Aplicação full stack para organização de tarefas, desenvolvida para praticar a integração entre front-end e back-end. A interface em React consome uma API REST com operações para criar, listar, buscar, editar e remover atividades, mantendo a atualização da tela simples e dinâmica.</p>
               <div className="project-tags">
                 <span>React</span>
                 <span>Java 17</span>
                 <span>Spring Boot</span>
                 <span>Docker</span>
               </div>
               <a className="project-link" href="https://github.com/Lkzin0122/to-do-list" target="_blank" rel="noopener noreferrer">Ver projeto no GitHub ↗</a>
             </div>
           </div>
           <div className="project-item project-item-compact project-item-vexor">
             <a className="project-visual" href="https://github.com/Lkzin0122/Vexor-Project" target="_blank" rel="noopener noreferrer">
               <img className="vexor-logo" src={vexorLogoImg} alt="Logo Vexor" />
             </a>
             <div className="project-info">
               <h3>Vexor <span>(Em desenvolvimento)</span></h3>
               <p>Aplicativo de rotina de academia criado para ajudar a organizar os treinos e tornar o acompanhamento da evolução mais simples. A proposta é reunir exercícios, séries e objetivos em uma experiência prática, permitindo que o usuário consulte sua rotina e mantenha mais consistência durante os treinos. O projeto ainda está em desenvolvimento e receberá novas funcionalidades conforme a ideia evoluir.</p>
               <a className="project-link" href="https://github.com/Lkzin0122/Vexor-Project" target="_blank" rel="noopener noreferrer">Ver projeto no GitHub ↗</a>
             </div>
           </div> 
        </div>
      </section>
      </main>

      <section className="contact-section reveal-on-scroll" id="contato">
        <div className="contact-intro">
          <p className="section-kicker">04 / VAMOS CONVERSAR</p>
          <div className="section-heading">
            <h2>Entre em contato</h2>
            <span className="section-index">04</span>
          </div>
          <p className="contact-description">
            Tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia?
            Envie uma mensagem e eu retorno assim que possível.
          </p>
          <a className="contact-email" href="mailto:bitencourt.lucas@outlook.com">
            bitencourt.lucas@outlook.com ↗
          </a>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <label>
            Nome
            <input name="name" type="text" placeholder="Como posso te chamar?" required />
          </label>
          <label>
            E-mail
            <input name="email" type="email" placeholder="voce@email.com" required />
          </label>
          <label className="contact-message">
            Mensagem
            <textarea name="message" rows="5" placeholder="Conte um pouco sobre o que você precisa..." required />
          </label>
          <button className="contact-submit" type="submit">Abrir meu e-mail ↗</button>
          {contactStatus && <p className="contact-status" role="status">{contactStatus}</p>}
        </form>
      </section>

      <footer>
        <div className="footer-content">
          <div>
            <p className="footer-signature">Lucas Bitencourt<span>.</span></p>
            <p className="footer-text">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          <nav className="footer-nav" aria-label="Links do rodapé">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
            <a href="https://www.linkedin.com/in/bitencourtlucas/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/Lkzin0122" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </nav>
        </div>
        <p className="footer-built">Desenvolvido com React + Vite</p>
      </footer>
      {showBackToTop && <a className="back-to-top" href="#inicio" aria-label="Voltar ao início">↑</a>}
          
    </div>
  )

  
}

export default Portifolio
