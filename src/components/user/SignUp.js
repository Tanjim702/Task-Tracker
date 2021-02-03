import { useState } from "react";
import { useHistory } from "react-router-dom";
import login_signup from "../customHooks/login_signup";
function SignUp() {
  const history = useHistory()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit =(e) =>{
    e.preventDefault()
    login_signup('/user/signup',{name,email,password},'signup',history)
    
  }
  return (
    <div>
      <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='name'value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="">email</label>
            <input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default SignUp;