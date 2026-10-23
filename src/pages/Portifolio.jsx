import '../pages/App.css'
import { useEffect, useState } from 'react'
import todoListImg from '../assets/imgs/ToDo List.png'
import vexorLogoImg from '../assets/imgs/LogoVexor.png'
import Curriculo from '../assets/pdf/Curriculo_Lucas.pdf?url'
import profileImg from '../assets/profile.png'

function Portifolio() {
  const headingText = 'Olá, me chamo\nLucas Bitencourt'
  const [typedHeading, setTypedHeading] = useState('')

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
    <div className="container">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">LB<span>.</span></a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <a className="header-linkedin" href="https://www.linkedin.com/in/bitencourtlucas/" target="_blank" rel="noopener noreferrer">
          LinkedIn <span>↗</span>
        </a>
      </header>

      <main>
      <div className="hero" id="inicio">
        <div className="hero-visual">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <a className="github-link" href="https://github.com/Lkzin0122" target="_blank" rel="noopener noreferrer">
            <img className="github-image" src={profileImg} alt="Foto Lucas Bitencourt" />
          </a>
        </div>
        <div className="hero-text">
          <p className="eyebrow">DESENVOLVEDOR EM FORMAÇÃO <span>●</span></p>
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
        </div>
      </div>

     
      
      <section className="about-section reveal-on-scroll" id="sobre">
        <p className="section-kicker">01 / PERFIL</p>
        <h2 className="about-title">Sobre mim</h2>
      
        <div className="About">
          <p>Olá me chamo Lucas Bitencourt, tenho 18 anos, sou de São Paulo e possuo curso Técnico em 
        Informática pela instituição FIEB. Sou um entusiasta de tecnologia e programação, com experiência prática
        no desenvolvimento de aplicações front-end, back-end e mobile. Durante minha formação em 
        Técnico em Informática, tive contato direto com programação de verdade, trabalhando com linguagens, 
        frameworks e conceitos usados no mercado de trabalho. 
          </p>
          <p>Além disso, participei de projetos práticos 
        que me permitiram aplicar meus conhecimentos em situações reais, desenvolvendo habilidades de resolução 
        de problemas e trabalho em equipe. Estou sempre buscando aprender novas tecnologias e aprimorar minhas 
        habilidades para me tornar um profissional cada vez mais completo e preparado para os desafios do mercado 
        de trabalho.
          </p>
        </div>
      </section>
       

      <section className="skills-section reveal-on-scroll" id="skills">
        <p className="section-kicker">02 / FERRAMENTAS</p>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <span>React</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            <span>Java</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
            <span>Spring Boot</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
            <span>Flutter</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" />
            <span>Dart</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server Management Studio" />
            <span>SQL Server Management Studio</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
            <span>Figma</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            <span>Git</span>
          </div>
          <div className="skill-item">
            <img src="https://vitejs.dev/logo.svg" alt="Vite" />
            <span>Vite</span>
          </div>
          <div className="skill-item">
            <img src="https://python.org/favicon.ico" alt="Python" />
            <span>Python</span>
          
          </div>
        </div>
      </section>
     
      <section className="projects-section reveal-on-scroll" id="projetos">
        <p className="section-kicker">03 / TRABALHOS SELECIONADOS</p>
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project-item project-item-no-image">
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
             <a href="https://github.com/Lkzin0122/to-do-list" target="_blank" rel="noopener noreferrer">
               <img src={todoListImg} alt="To-Do List" className="project-img" />
             </a>
             <div className="project-info">
               <h3>To-Do List</h3>
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
               <p>Projeto em desenvolvimento que representa uma nova etapa de experimentação e evolução no meu portfólio. A proposta, as funcionalidades e a stack ainda estão sendo definidas, e novas informações serão adicionadas conforme o projeto avançar.</p>
               <a className="project-link" href="https://github.com/Lkzin0122/Vexor-Project" target="_blank" rel="noopener noreferrer">Ver projeto no GitHub ↗</a>
             </div>
           </div> 
        </div>
      </section>
      </main>

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
            <a href="https://www.linkedin.com/in/bitencourtlucas/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/Lkzin0122" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </nav>
        </div>
        <p className="footer-built">Desenvolvido com React + Vite</p>
      </footer>
          
    </div>
  )

  
}

export default Portifolio
