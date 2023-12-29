import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";


const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Zaloguj się</h4>
        <FormRow type="email" username="email"></FormRow>
        <FormRow type="password" username="hasło"></FormRow>
        <button type="submit" className="btn btn-block">Zaloguj</button>
        <p>
        Nie masz jeszcze konta? Kliknij tutaj aby się zarejestrować<br></br>
        <Link to='/register' className="member-btn">
          Zarejestruj się
        </Link>
        </p>
      </form>

    </Wrapper>
  );
};

export default Login;