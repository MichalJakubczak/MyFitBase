import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Register = () => {
  return (
  <Wrapper>
    <form className="form">
      <Logo/>
      <h4>Dołącz do FitBase</h4>
      <FormRow type='text' username='Nazwa użytkownika'/>
      <FormRow type='text' email='email' labelText='email'/>
      <FormRow type='text' password='password' labelText='hasło'/>
      <button type="submit" className="btn btn-block">Utwórz konto</button>
      
      <p>
        Masz już konto? Kliknij tutaj aby się zalogować!<br></br>
        <Link to='/login' className="member-btn">Zaloguj</Link>
      </p>
    </form>
  </Wrapper>
  );
};

export default Register;