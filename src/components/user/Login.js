import { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions/userActions";
function Login({login}) {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    // e.preventDefault()
    login('/user/login',{email,password},history)
    e.preventDefault()
    
  }
  return (
    <div>
      <h1>Login</h1>
      
        <form onSubmit={handleSubmit}>

          <label htmlFor="">email</label>
          <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="">Password</label>
          <input type="text" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      
    </div>
  );
}

export default connect(null,{login})(Login);