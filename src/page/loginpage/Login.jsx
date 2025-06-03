import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axiosRequest from "../../lib/axiosfile";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const {updateUser} = useContext(AuthContext)
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    username: "",
    password: ""
  });
  const navigate=useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserdata((prev) => (
      {
        ...prev,
        [name]: value
      }
    ));
  }
  function login(e) {
    e.preventDefault();
    setIsLoading(true);

    // axios({
    //   url: 'http://localhost:8080/login',
    //   method: "POST",
    //   data: userdata,
    // }) 
    axiosRequest.post("/login",userdata)
    .then((res) => {
      if (res.data.success) {
        setError("")
        updateUser(res.data.data);
        //localStorage.setItem("user", res.data.data);

         navigate("/");
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
    <div className="login">
      <div className="formContainer">
        <form onSubmit={login}>
          <h1>Welcome back</h1>
          <input
            name="username"
            value={userdata.username}
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            name="password"
            value={userdata.password}
            type="password"
            required
            placeholder="Password"
            onChange={handleChange}
          />
          <button disabled={isLoading} >Login</button>
           {error && <span>{error}</span>} 
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
