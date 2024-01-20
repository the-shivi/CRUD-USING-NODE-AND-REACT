import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Fetch.css'

const Fetch = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/fetch');
        setEmployees(response.data); // Assuming the response data is an array of employee objects
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="employee-table-container">
      <h2>Employee Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.e_id}</td>
              <td>{employee.e_name}</td>
              <td>{employee.e_sal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fetch;
