import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: 'demouser@gmail.com',
      password: 'demouser'
    }
    return this.props.login(demoUser)
  };

  render() {
    const username = (<label>Username:
            <input
        type='text'
        value={this.state.username}
        onChange={this.handleInput('username')}
      />
    </label>);

    const {formType} = this.props

    return (
      <div className='session-top-container'> 
        <div className='splash-header'>
          <img src={window.netflix_logo} className='netflix-logo-session-form' />
        </div>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <div className='session-input'>
              <h2 className='form-title'>{formType}</h2>
              {formType === 'Sign Up' ? username : null}
              <div className='email-container'>
                <label className="email-label">Email</label>
                <input
                  type='text'
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                  className="email-input-box"
                />
              </div>
              <div className='password-container'>
                <label className="password-label">Password</label>
                <input
                  type='password'
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  className='password-input-box'
                />
              </div>
              <div className='btn-session'>
              <button className='submit-button' type='submit' value={formType}>{formType}</button>
              <button className='demo-button-session' onClick={this.handleDemo}>Demo</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
