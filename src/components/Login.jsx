import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let inputInfo = e.target.value;
    setState({
      ...state,
      [e.target.name]: inputInfo,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ state });
    if (state.email === "admin@gmail.com" && state.password === "123") {
      navigate("/home");
    } else {
      alert("Wrong Information!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={(e) => handleChange(e)} />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
