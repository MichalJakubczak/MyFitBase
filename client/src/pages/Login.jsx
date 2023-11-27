import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";


const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>login</h4>
        <FormRow type="email" username="email"></FormRow>
        <FormRow type="password" username="password"></FormRow>
        <button type="submit" className="btn btn-block">Log in</button>
        <p>
        Don't have an account yet? Click here to join<br></br>
        <Link to='/register' className="member-btn">
          Sing Up
        </Link>
        </p>
      </form>

    </Wrapper>
  );
};

export default Login;