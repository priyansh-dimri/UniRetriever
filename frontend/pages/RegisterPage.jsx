import React from "react";

const RegisterPage = ({ FormInput }) => (
  <div className="form-wrapper">
    <div className="form-container">
      <h2>Create a new account</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-input-group">
          <FormInput
            id="username"
            label="Full Name"
            type="text"
            placeholder="John Doe"
          />
          <FormInput
            id="email-address-register"
            label="Email address"
            type="email"
            placeholder="you@university.edu"
          />
          <FormInput
            id="password-register"
            label="Password"
            type="password"
            placeholder="Choose a strong password"
          />
        </div>
        <button type="submit" className="form-submit-btn">
          Register
        </button>
      </form>
    </div>
  </div>
);

export default RegisterPage;
