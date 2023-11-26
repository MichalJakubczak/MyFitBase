import styled  from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/gym2.png'
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
                 
                  your <span>fit</span><span>Base</span>
          </h1>
          <p>
             Welcome to the world where every step matters and every training brings you closer to your goal.
              We are glad that you have joined our community of enthusiasts of exercise and a healthy lifestyle.
              With us you will discover new ways to activate your day and find inspiration for regular activities
              training and learn the secrets of optimizing your nutritional plan.
              We're here to support you every step of the way - no matter what.
              whether you are a beginner or an advanced fitness enthusiast.
              Let's move forward to a healthier and happier life!
          </p>
          <Link to='/register' className="btn register-link">Register</Link>
          <Link to='/login' className="btn">Login</Link>
        </div>
        <img src={main} alt='train' className="img main-img"></img>
      </div>
    </Wrapper>
  ) 
};


export default Landing;