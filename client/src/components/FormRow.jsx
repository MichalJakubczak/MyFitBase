
const FormRow = ({type, username, labelText, defaultValue}) => {
  return (
    <div className="form-row">
        <label htmlFor={username} className="form-label">
          {labelText || username}
        </label>
        <input type={type} id={username} username={username} className="form-input" defaultValue={defaultValue || ''} required/>
      </div>
  );
}

export default FormRow;






