import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passError, setPassError] = useState('');

  // Password Validation
  const validatePassword = (password) => {
    if (password.length < 6) {
      setPassError('Password must be at least 6 characters');
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPassError('Must contain at least one uppercase letter');
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setPassError('Must contain at least one lowercase letter');
      return false;
    }

    setPassError('');
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) return;

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success('Registered successfully', result);
            navigate('/');
          })
          .catch(err => toast.error(err.message));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success('Logged in with Google');
        navigate('/');
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <Toaster />

      <div className="card bg-base-100 mt-20 mx-auto w-full max-w-sm shadow-2xl">
        <h1 className="text-4xl text-center pt-5 font-bold">Register</h1>

        <div className="card-body">
          <form onSubmit={handleRegister}>

            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {passError && (
              <p className="text-red-500 text-sm mt-1">{passError}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Register
            </button>
          </form>

          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">Login</Link>
          </p>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignin}
            className="btn mt-5 text-black bg-white border border-gray-300 w-full flex items-center justify-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="M0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
