import React, { useState } from 'react';
import axios from 'axios';
import './Delete.css'
const Delete = () => {
  const [eId, setEId] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setEId(event.target.value);
  };

  const handleDelete = () => {
    axios.delete('http://localhost:8080/delete', {
      data: {
        e_id: parseInt(eId) // Assuming e_id is expected as an integer
      }
    })
    .then(response => {
      setMessage('Employee deleted successfully');
      // Handle any other logic after successful deletion if needed
    })
    .catch(error => {
      setMessage('Failed to delete employee');
      // Handle error cases or show an error message to the user
    });
  };

  return (
    <div className="delete-employee-container">
      <h2>Delete Employee</h2>
      <label>
        Employee ID:
        <input type="text" value={eId} onChange={handleInputChange} />
      </label>
      <button onClick={handleDelete}>Delete Employee</button>
      <p>{message}</p>
    </div>
  );
};

export default Delete;
