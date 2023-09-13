import React, { Component } from 'react';
import "./Login.css"

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      isLoggedIn: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: '',
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    const correctName = 'Nii Amarh';
    const correctEmail = 'nii@login.com';
    const correctPassword = 'login@form';

    if (name === correctName && email === correctEmail && password === correctPassword) {
      this.setState({
        isLoggedIn: true,
        error: '',
      });
    } else {
      this.setState({
        error: 'Invalid name, email, or password',
      });
    }
  };

  render() {
    const { name, email, password, error, isLoggedIn } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {name}!</p>
          </div>
        ) : (
          <form className="login-form form-group" onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <div>
              <label htmlFor="name">Name:</label>
              <input className='input-field'
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input className='input-field'
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input className='input-field'
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </div>
            <button className='submit-button' type="submit">Login</button>
            {error && <p className='error-message'>{error}</p>}
          </form>
        )}
      </div>
    );
  }
}

export default LoginForm;
