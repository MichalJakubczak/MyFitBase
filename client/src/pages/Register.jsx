import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Register = () => {
  return (
  <Wrapper>
    <form className="form">
      <Logo/>
      <h4>Register</h4>
      <FormRow type='text' username='username'/>
      <FormRow type='text' email='email' labelText='email'/>
      <FormRow type='text' password='password' labelText='password'/>
      <button type="submit" className="btn btn-block">Create account</button>
      <p>
        Already registered? Click here to login<br></br>
        <Link to='/login' className="member-btn">Login</Link>
      </p>
    </form>
  </Wrapper>
  );
};

export default Register;