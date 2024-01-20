import React from 'react';
import './Home.css'
const Home = () => {
  return (
    <div className="landing-page-container">
      <h1>Welcome to the Employee Management System</h1>
      <p>
        This system allows you to manage employee information efficiently. You can perform various actions such as inserting new employees, updating existing information, deleting employees, and viewing employee data.
      </p>
      <p>
        Please use the navigation menu above to access different functionalities.
      </p>
    </div>
  );
};

export default Home;
