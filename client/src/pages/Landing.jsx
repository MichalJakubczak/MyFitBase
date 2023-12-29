import styled  from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/gym3.png'
import { Link } from "react-router-dom";
import { Logo } from "../components";


const Landing = () => {
  return(
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
                 Witaj w aplikacji <br/>
                  <span>fit</span><span>Base</span>
          </h1>
          <p>
              Świat, w którym liczy się każdy krok i każdy trening przybliża Cię do celu.
              Cieszymy się, że dołączyłeś do naszej społeczności pasjonatów ruchu i zdrowego stylu życia.
              Z nami odkryjesz nowe sposoby na aktywizację dnia i znajdziesz inspirację do regularnych zajęć
              szkolenia i poznaj tajniki optymalizacji swojego planu żywieniowego.
              Jesteśmy tutaj, aby wspierać Cię na każdym kroku – bez względu na wszystko.
              niezależnie od tego, czy jesteś początkującym, czy zaawansowanym entuzjastą fitnessu.
              Przejdźmy do zdrowszego i szczęśliwszego życia!
          </p>
          <Link to='/register' className="btn register-link">Rejestracja</Link>
          <Link to='/login' className="btn">Logowanie</Link>
        </div>
        <img src={main} alt='train' className="img main-img"></img>
      </div>
    </Wrapper>
  ) 
};


export default Landing;