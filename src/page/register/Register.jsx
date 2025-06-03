import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axiosRequest from "../../lib/axiosfile";


function Register() {

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  function adduser(e) {
    e.preventDefault();
    setIsLoading(true);
    // axios({
    //   url: 'http://localhost:8080/register',
    //   method: "POST",
    //   data: user,
    // })
    
    axiosRequest.post('/register', user,)
      .then((res) => {
        if (res.data.success) {
          setError("")
          navigate("/login");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }


  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={adduser} >
          <h1>Create an Account</h1>
          <input
            name="username"
            type="text"
            value={user.username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            name="email"
            type="text"
            value={user.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input name="password"
            type="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
