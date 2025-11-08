import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Login = () => {

  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    signInUser(email, password)
      .then(result => {
        toast.success("Login Successful",result);
        navigate("/");
      })
      .catch(err => {
        setError("Invalid email or password",err);
        toast.error("Login Failed");
      });
  };

  return (
    <div>
      <div className="card bg-base-100 mt-20 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl text-center pt-5 font-bold">Login now!</h1>

        <div className="card-body">

          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">

              <label className="label">Email</label>
              <input 
                type="email" 
                name="email"
                className="input"
                placeholder="Email" 
                required 
              />

              <label className="label">Password</label>
              <input 
                type="password" 
                name="password"
                className="input"
                placeholder="Password" 
                required 
              />

              {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

              <button className="btn btn-neutral mt-4">
                Login
              </button>

            </fieldset>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
