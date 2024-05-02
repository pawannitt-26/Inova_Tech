import React, { useContext, useEffect, useState } from 'react';
import { Select, TagsInput, Textarea } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { UserContext } from '../../Context/UserContextProvider';

import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TutorRegister: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    role: 'TUTOR',
    email: '',
    password: '',
  });
  const [formDataUpdate, setFormDataUpdate] = useState({
    experience: 0,
    languages: [''],
    bio: '',
  });

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [status, setStatus] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleInputChangeUpdate = (value) => {
    setFormData((prevData) => ({ ...prevData, ['experience']: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prevData) => ({
      ...prevData,
      languages: selectedOptions as never[],
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    axios
      .post('http://localhost:3000/api/users/register', formData, {
        withCredentials: true,
      })
      .then((response) => {
        // Handle the response here
        console.log('Registration successful:', response.data);
        setUserId(response.data.user._id);
        toast.success('User created, please fill in the next form');
        // Redirect to the next page
        // window.location.href = '/next-page';
      })
      .catch((error) => {
        // Handle the error here
        console.error('Registration failed:', error);
        toast.error('Registration failed');
      });
    e.preventDefault();
    // Implement your registration logic here
    setStatus(true);
    console.log('Form Data:', formData);
  };

  const handleSubmitUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:3000/api/users/tutor/${userId}`,
        formDataUpdate,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        // Handle the response here
        const user = response.data.tutor;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        console.log('Registration successful:', response.data);
        toast.success('Registration successful');
        // Redirect to the next page
        navigate('/myschedule');
        // window.location.href = ';
      })
      .catch((error) => {
        // Handle the error here
        console.error('Registration failed:', error);
        toast.error('Registration failed');
      });
    // Implement your registration logic here
    setStatus(true);
    console.log('Form Data:', formDataUpdate);
  };
  const [Lang] = useState([
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Italian',
    'Portuguese',
    'Dutch',
  ]);
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      {status == false ? (
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
            {/* <div className="mb-4">
            <NumberInput
              label="Teaching Experience"
              description="in years"
              placeholder="0"
            />
          </div>
          <div className="mb-4">
            <Select
              label="Languages Known"
              placeholder="Pick value"
              data={languages}
              searchable
            />
          </div> */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Next
            </button>
          </form>
        </div>
      ) : (
        <div className="w-[500px] mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleSubmitUpdate}>
            <div className="mb-4">
              <NumberInput
                label="Teaching Experience"
                description="in years"
                placeholder="0"
                onChange={(value) => {
                  console.log(value);
                  setFormDataUpdate((prevData) => ({
                    ...prevData,
                    experience: Number(value),
                  }));
                }}
              />
            </div>
            <div className="mb-4">
              <TagsInput
                label="Languages Known"
                placeholder="Select languages"
                data={Lang}
                maxDropdownHeight={200}
                onChange={(selectedOptions) => {
                  console.log(selectedOptions);
                  setFormDataUpdate((prevData) => ({
                    ...prevData,
                    languages: selectedOptions,
                  }));
                }}
              />{' '}
              <br />
              <Textarea
                label="Bio"
                // description="Input description"
                placeholder="Your bio"
                onChange={(e) => {
                  setFormDataUpdate((prevData) => ({
                    ...prevData,
                    bio: e.currentTarget.value,
                  }));
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => {
                // window.location.href = '/myschedule';
              }}
            >
              Register
            </button>
          </form>
        </div>
      )}{' '}
    </div>
  );
};

export default TutorRegister;
