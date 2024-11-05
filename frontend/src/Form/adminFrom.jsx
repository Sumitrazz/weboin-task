import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    course: '',
    status: 'Unplaced',
  });

  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://weboin-task-dyrr.onrender.com/api/students/form');
        setUsers(response.data);
      } catch (error) {
        setApiError('Error fetching users. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const validate = () => {
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.role.trim()) formErrors.role = 'Role is required';
    if (!formData.email.trim()) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) formErrors.phone = 'Phone number is required';
    if (!formData.course) formErrors.course = 'Course selection is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError('');

    try {
      const response = await axios.post('https://weboin-task-dyrr.onrender.com/api/students/form', formData);
      setUsers([...users, response.data]);
      setFormData({ name: '', role: '', email: '', phone: '', course: '', status: 'Unplaced' });
    } catch (error) {
      setApiError('Error submitting form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://weboin-task-dyrr.onrender.com/api/students/form/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      setApiError('Error deleting user. Please try again later.');
    }
  };

  return (
    <div className="flex mt-20  flex-col items-center min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl text-white mb-10">
        <h2 className="text-2xl font-bold text-center text-lime-400 mb-6">Fill This Form</h2>
        {apiError && <p className="text-red-500 mb-4">{apiError}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['name', 'role', 'email', 'phone', 'course'].map((field) => (
            <div key={field}>
              <label className="block text-lime-400 font-semibold mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              {field === 'course' ? (
                <select
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-lime-500"
                >
                  <option value="">Select a course</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="React Basics">React Basics</option>
                  <option value="React Basics">JavaScript Fundamentals</option>
                  <option value="React Basics">Advanced CSS</option>
                  <option value="React Basics">Backend Development</option>

                </select>
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-lime-500"
                  placeholder={`Enter your ${field}`}
                />
              )}
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}
          <div>
            <label className="block text-lime-400 font-semibold mb-2">Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-lime-500"
            >
              <option value="Unplaced">Unplaced</option>
              <option value="Placed">Placed</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 mt-6 bg-lime-500 text-black font-semibold rounded hover:bg-lime-400 transition-colors duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <div className="grid mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="text-white">Loading users...</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="bg-white text-black p-4 rounded shadow-lg">
              <h3 className="text-lg font-bold mb-2">{user.name}</h3>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone Number:</strong> {user.phone}</p>
              <p><strong>Course:</strong> {user.course}</p>
              <p><strong>Status:</strong> {user.status}</p>
              <button
                onClick={() => handleDelete(user._id)}
                className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-400"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>


    </div>
  );
};

export default Form;
