import React, { useState } from "react";
import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";
import './blogcss.css';
import Back from "../../common/Back"
import "../../home/recent/recent.css"
import img from "../../images/civilwork.jpeg"

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
<>
<section className='blog-out mb'>
<Back name='Adminlogin' title='Login for blog' cover={img} />
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
      </form>
    </div>
    </section>
    </>
  );
};

export default Login;
