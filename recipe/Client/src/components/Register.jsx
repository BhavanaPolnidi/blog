import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
   const navigate = useNavigate();
   const { register } = useContext(AppContext);
   const [name, setname] = useState("");
   const [gmail, setgmail] = useState("");
   const [password, setpassword] = useState("");

   const registerHandler = async (e) => {
     e.preventDefault();
     const result = await register(name, gmail, password);
    
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
     
     if (result.data.message !== "User Already exist") {
       setTimeout(() => {
         navigate("/login");
       }, 1500);
     }
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
        <h2 className="text-center" style={{ color: "#9de176" }}>Register</h2>
        <form
          onSubmit={registerHandler}
          style={{
            width: "420px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              type="text"
              className="form-control"
              id="nameInput"
              style={{
                border: "1px solid #9de176",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              onChange={(e) => setgmail(e.target.value)}
              required
              type="email"
              className="form-control"
              id="emailInput"
              style={{
                border: "1px solid #9de176",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              type="password"
              className="form-control"
              id="passwordInput"
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
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
