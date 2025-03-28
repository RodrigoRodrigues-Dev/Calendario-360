import {
  HomeContainer,
  CallToActionButton,
  HomeLogo,
  HomeText,
  HomeHeader,
  TopCircleImage,
  BottomCircleImage,
  MinifiedFooterHome
} from './styles';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <HomeContainer>
      <HomeHeader>
        <HomeLogo
          src="https://calendario-360-images.vercel.app/Logo.png"
          alt="Calendario 360 logo"
        />
        <h1>Calendario 360</h1>
        <h3>Organize sua equipe e tarefas de forma simples e integrada.</h3>
      </HomeHeader>
      <HomeText>
        Calendario 360 revoluciona a organização do seu dia com um calendário
        digital inovador e altamente funcional. Sua interface moderna e
        intuitiva foi projetada para facilitar a criação, edição e
        acompanhamento das suas tarefas diárias, oferecendo uma visão integrada
        e detalhada de todas as suas atividades. Com o Calendario 360, planejar
        seu tempo se torna simples, permitindo que você priorize suas
        responsabilidades e alcance seus objetivos de maneira eficiente.
      </HomeText>
      <Link to="/AuthLanding">
        <CallToActionButton>Experimente agora</CallToActionButton>
      </Link>
    </HomeContainer>
    <TopCircleImage
      src="https://calendario-360-images.vercel.app/TopCircle.png"
      alt=""
    />
    <BottomCircleImage
      src="https://calendario-360-images.vercel.app/BottomCircle.png"
      alt=""
    />
    <MinifiedFooterHome>
      <p>
        © 2025{' '}
        <a
          href="https://github.com/RodrigoRodrigues-Dev"
          target="_blank"
          rel="noreferrer"
        >
          Rodrigo
        </a>
        . Todos os direitos reservados.
      </p>
    </MinifiedFooterHome>
  </>
);

export default Home;
