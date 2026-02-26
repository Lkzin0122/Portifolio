import './App.css'
import todoListImg from './assets/imgs/ToDo List.png'
import safeSolImg from './assets/imgs/SafeSol.png'
import Curriculo from './assets/pdf/Curriculo_Lucas.pdf?url'

function Portifolio() {
  return (  
    <div className="container">
      <h1 className='Title'>Olá me chamo <br /> Lucas Bitencourt</h1>
      <p className='subtitle'>Técnico em Informática | Desenvolvedor Full Stack Jr | Java • React • Spring Boot • Flutter • SQL</p>
      
      <div className="contact-buttons">
        <a className="contact-btn Curriculo" href={Curriculo} download target="_blank" rel="noopener noreferrer">Currículo</a>
        <a className="contact-btn linkedin" href="https://www.linkedin.com/in/bitencourtlucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="contact-btn github" href="https://github.com/Lkzin0122" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="contact-btn instagram" href="https://www.instagram.com/luczz_bt/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <a className="github-link" href="https://github.com/Lkzin0122">
      <img className="github-image" src="https://github.com/Lkzin0122.png" alt="Foto Lucas Bitencourt" />
      </a>
      
      <h2 className="about-title">Sobre mim</h2>
      
     <div className="About">
      <p >Olá me chamo Lucas Bitencourt, tenho 18 anos, sou de São Paulo e possuo curso Técnico em 
        Informática pelo ITB. Sou um entusiasta de tecnologia e programação, com experiência prática
        no desenvolvimento de aplicações front-end, back-end e mobile. Durante minha formação em 
        Técnico em Informática, tive contato direto com programação de verdade, trabalhando com linguagens, 
        frameworks e conceitos usados no mercado de trabalho. <p>Além disso, participei de projetos práticos 
        que me permitiram aplicar meus conhecimentos em situações reais, desenvolvendo habilidades de resolução 
        de problemas e trabalho em equipe.</p> Estou sempre buscando aprender novas tecnologias e aprimorar minhas 
        habilidades para me tornar um profissional cada vez mais completo e preparado para os desafios do mercado 
        de trabalho.
      </p>
      </div>
       

      <div className="skills-section">
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
        </div>
      </div>
     
      <div className="projects-section">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project-item">
            <a href="https://github.com/Lkzin0122/safe_solutions_flutter">
              <img src={safeSolImg} alt="Safe Solutions" className="project-img mobile-format" />
              <span>Safe Solutions - Flutter</span>
            </a>
          </div>
          <div className="project-item">
            <a href="https://github.com/Lkzin0122/to-do-list">
              <img src={todoListImg} alt="To-Do List" className="project-img" />
              <span>To-Do List</span>
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <p className="footer-text">&copy; {new Date().getFullYear()} Lucas Bitencourt. Todos os direitos reservados.</p>
          <p className="footer-text">Desenvolvido com React + Vite</p>
        </div>
      </footer>
          
    </div>
  )

  
}

export default Portifolio
