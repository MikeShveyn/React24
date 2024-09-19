import {useState} from 'react'

export default function Login() {
  const [enterdEmail, setEmteredEmail] = useState('')
  const [enterdPassword, setEmteredPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

  const handleEmail = (event) => {
    setEmteredEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setEmteredEmail(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleEmail} value={enterdEmail} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handlePassword} value={enterdPassword}/>
        </div>
      </div>

      <p className="form-actions">
        <button  type="button" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
