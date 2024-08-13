import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [gmail, setgmail] = useState("");
  const [password, setpassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await login(gmail, password);
    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          border: "2px solid #9de176",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <h2 className="text-center" style={{ color: "#9de176" }}>Login</h2>
        <form
          onSubmit={loginHandler}
          style={{
            width: "420px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              onChange={(e) => setgmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              style={{
                border: "1px solid #9de176",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
              style={{
                border: "1px solid #9de176",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
          <div className="container d-grid col-6">
            <button
              type="submit"
              className="btn"
              style={{
                color: "white",
                border: "1px solid #9de176",
                backgroundColor: "#9de176",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
