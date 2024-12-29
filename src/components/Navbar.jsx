import React, { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon from react-icons
import logo from '../assets/logo.jpeg'; // Import your logo image
import { auth } from '../lib/firebase'; // Firebase imports
import { useNavigate } from 'react-router-dom'; // For navigation after login/signup
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { notification } from 'antd'; // Import Ant Design notification component
import { useAuth } from '../context/context';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login'); // 'login' or 'signup'
  const [loading, setLoading] = useState(false); // Loading state for form submissions
  const navigate = useNavigate();
  const { user, setUser } = useAuth(); // Get user from AuthContext

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate('/dashboard'); // Redirect after successful login
      notification.success({
        message: 'Success',
        description: 'Successfully logged in with Google.',
        placement: 'topRight',
      });
    } catch (error) {
      console.error("Google login error:", error);
      notification.error({
        message: 'Login Error',
        description: `Error: ${error.message}`,
        placement: 'topRight',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (modalType === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
        notification.success({
          message: 'Login Success',
          description: 'You have successfully logged in.',
          placement: 'topRight',
        });
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        notification.success({
          message: 'Signup Success',
          description: 'You have successfully signed up.',
          placement: 'topRight',
        });
      }
      navigate('/dashboard'); // Redirect after successful login/signup
    } catch (error) {
      console.error(`${modalType} error:`, error.message);
      notification.error({
        message: `${modalType === 'login' ? 'Login' : 'Signup'} Error`,
        description: `Error: ${error.message}`,
        placement: 'topRight',
      });
    } finally {
      setLoading(false);
      handleCloseModal();
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold">Software Metrics Tool</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {/* Conditionally render login/signup buttons or username */}
            {!user ? (
              <>
                <li>
                  <button
                    onClick={() => handleOpenModal('login')}
                    className="hover:underline focus:outline-none text-white"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOpenModal('signup')}
                    className="hover:underline focus:outline-none text-white"
                  >
                    Signup
                  </button>
                </li>
              </>
            ) : (
              <li className="text-white">
                Welcome, {user.displayName || 'User'}
              </li>
            )}
          </ul>
        </nav>
      </header>

      {/* Custom Modal (Tailwind CSS) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">{modalType === 'login' ? 'Login' : 'Signup'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className={`w-full p-3 rounded-md ${loading ? 'bg-gray-500' : 'bg-blue-600 text-white'}`}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : modalType === 'login' ? 'Login' : 'Signup'}
                </button>
              </div>
            </form>

            {/* Google Login Button */}
            <div className="mt-4">
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-red-500 text-white p-3 rounded-md flex items-center justify-center space-x-2"
              >
                <FaGoogle className="text-lg" />
                <span>Login with Google</span>
              </button>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={handleCloseModal}
                className="text-blue-500 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
