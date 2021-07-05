import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handelePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleSubmit = (e) => {
    const userLoginDetails = { email, password };
    axios
      .post("https://salty-spire-93558.herokuapp.com/login", userLoginDetails)
      .then((user) => {
        localStorage.setItem("token", user.data.token);
        history.push("/matches");
      })
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  return (
    <div className="login">
      <section className="login-content">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="input-holder">
            <img src="images/email.svg" alt="email" />
            <input
              placeholder="E-Mail"
              value={email}
              type="email"
              onChange={handleEmail}
            />
          </div>
          <div className="input-holder">
            <img src="images/lock.svg" alt="email" />
            <input
              placeholder="Password"
              value={password}
              type="password"
              onChange={handelePassword}
            />
          </div>
          <button onClick={handleSubmit}>LOGIN</button>

          <div className="google-login-btn">
            <img src="images/google-icon.svg" alt="google" />
            <p> Continue with Google</p>
          </div>
        </form>
      </section>
      <section className="login-illustration">
        <img
          className="login-svg"
          src="images/login-undraw.svg"
          alt="login-illustration"
        />
      </section>
      <section className="bottom-wave-design">
        <img src="images/Bottom-wave-design.svg" alt="wave" />
      </section>
    </div>
  );
}

export default Login;
