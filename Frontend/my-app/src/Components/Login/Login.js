import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      error.username = "Username is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signin",
          user
        );
        alert(response.data.message);
        setUserState(response.data.user);
        navigate("/Posts", { replace: true });
      } catch (error) {
        console.error("Login error:", error);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [formErrors]);

  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={changeHandler}
          value={user.username}
        />
        <p className={basestyle.error}>{formErrors.username}</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  );
};

export default Login;
