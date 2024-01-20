import React, { useState } from 'react';
import axios from 'axios';
import './Post.css'

const Post = () => {
  const [employee, setEmployee] = useState({
    e_id: '',
    e_name: '',
    e_sal: '',
  });
  const [errors, setErrors] = useState({
    e_id: '',
    e_name: '',
    e_sal: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let errorMessage = '';

    if (name === 'e_id' && !/^\d+$/.test(value)) {
      errorMessage = 'Employee ID should be numeric with no spaces';
    }

    if (name === 'e_name' && !/^[a-zA-Z]+$/.test(value)) {
      errorMessage = 'Employee Name should be alphabetical with no spaces or numeric characters';
    }

    if (name === 'e_sal' && !/^\d+$/.test(value)) {
      errorMessage = 'Employee Salary should be numeric only with no spaces';
    }

    setErrors({ ...errors, [name]: errorMessage });
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/insert', employee);
      console.log('Employee inserted:', response.data);
      setMessage('Employee Data Inserted Successfully')
      // You can add further logic here like displaying a success message
    } catch (error) {
      console.error('Error inserting employee:', error);
      // Handle error scenarios here
    }
  };

  return (
    <div className="insert-employee-container">
      <h2>Insert Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="e_id">Employee ID:</label>
          <input
            type="text"
            id="e_id"
            name="e_id"
            value={employee.e_id}
            onChange={handleInputChange}
          />
          {errors.e_id && <h6 style={{ color: 'red' }}>{errors.e_id}</h6>}
        </div>
        <div>
          <label htmlFor="e_name">Employee Name:</label>
          <input
            type="text"
            id="e_name"
            name="e_name"
            value={employee.e_name}
            onChange={handleInputChange}
          />
          {errors.e_name && <h6 style={{ color: 'red' }}>{errors.e_name}</h6>}
        </div>
        <div>
          <label htmlFor="e_sal">Employee Salary:</label>
          <input
            type="text"
            id="e_sal"
            name="e_sal"
            value={employee.e_sal}
            onChange={handleInputChange}
          />
          {errors.e_sal && <h6 style={{ color: 'red' }}>{errors.e_sal}</h6>}
        </div>
        <button type="submit">Insert Employee</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Post;
