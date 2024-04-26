import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";

const Login = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
    setSignUpData({ username: "", password: "" });
  };

  // TODO: needs work
  return (
    <div>
      <LoginPage
        onSubmit={handleSubmit}
        input
        type="string"
        name="username"
        placeholder="Username"
        value={signUpData.username}
        onChange={handleChange}
      />
    </div>
  );
};

export default SignUp;
