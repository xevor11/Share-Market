import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp } from '../services/auth';

const SignUp = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState([]);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await signUp(formData);
      history.push('/login');
    } catch (error) {
      console.error(error);
      setFormErrors(['An error occurred. Please try again later.']);
    }
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.name) {
      errors.push('Name is required.');
    }

    if (!formData.email) {
      errors.push('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push('Email is invalid.');
    }

    if (!formData.password) {
      errors.push('Password is required.');
    } else if (formData.password.length < 6) {
      errors.push('Password must be at least 6 characters.');
    }

    if (formData.password !== formData.confirmPassword) {
      errors.push('Passwords do not match.');
    }

    return errors;
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {formErrors.length > 0 && (
        <div className="alert alert-danger" role="alert">
          {formErrors.map((error, i) => (
            <div key={i}>{error}</div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
