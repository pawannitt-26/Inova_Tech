import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { UserContext } from '../../Context/UserContextProvider';
import { useNavigate } from 'react-router-dom';

const LearnerRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'STUDENT',
    email: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { setUser } = useContext(UserContext);




  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your registration logic here
    axios
      .post('http://localhost:3000/api/users/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        toast.success('Registration successful!');
        navigate('/boughtCourses');
      })
      .catch((err) => {
        toast.error('Something went Wrong');
        console.log(err);
      });
    console.log('Form Data:', formData);

    // For demonstration purposes, you can show a toast message

    // Redirect to "myschedule" page
  };

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-[500px] mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LearnerRegister;
