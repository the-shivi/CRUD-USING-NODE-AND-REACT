import React, { useState } from 'react';
import axios from 'axios';
import './Update.css'

const Update = () => {
  const [eId, setEId] = useState('');
  const [eName, setEName] = useState('');
  const [eSal, setESal] = useState('');

  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      // Your API endpoint
      const apiUrl = 'http://localhost:8080/update';

      // Payload to be sent
      const payload = {
        e_id: eId,
        e_name: eName,
        e_sal: eSal
      };

      // Making a PUT request using Axios
      const response = await axios.put(apiUrl, payload);
      
      // Check response status
      if (response.status === 200) {
        // Handle success scenario, e.g., show a success message
        console.log('Employee updated successfully!');
        setMessage('Data Updated Successfylly')
      }
    } catch (error) {
      // Handle error scenarios, e.g., show an error message
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="update-employee-container">
      <h2>Update Employee</h2>
      <div>
        <label>
          Employee ID:
          <input
            type="text"
            value={eId}
            onChange={(e) => setEId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Employee Name:
          <input
            type="text"
            value={eName}
            onChange={(e) => setEName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Employee Salary:
          <input
            type="text"
            value={eSal}
            onChange={(e) => setESal(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdate}>Update Employee</button>
      <p>{message}</p>
    </div>
  );
};

export default Update;
