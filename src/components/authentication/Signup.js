import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleName = (e) => {
    setName(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handelePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleSubmit = (e) => {
    console.log(name, email, password);
    e.preventDefault();
  };

  return (
    <div className="login">
      <h1>Signup</h1>
      <form>
        <span>
          <label>Name : </label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </span>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        <span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handelePassword}
          />
        </span>
        <span>
          <button type="submit" onClick={handleSubmit}>
            Signup
          </button>
          <button type="submit">Login</button>
        </span>
      </form>
    </div>
  );
}

export default Signup;
