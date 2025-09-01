import React from "react";

const LoginPage = ({ FormInput }) => (
  <div className="form-wrapper">
    <div className="form-container">
      <h2>Sign in to your account</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-input-group">
          <FormInput
            id="email-address"
            label="Email address"
            type="email"
            placeholder="you@university.edu"
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
          />
        </div>
        <div className="form-options">
          <a href="#">Forgot your password?</a>
        </div>
        <button type="submit" className="form-submit-btn">
          Sign in
        </button>
      </form>
    </div>
  </div>
);

export default LoginPage;
