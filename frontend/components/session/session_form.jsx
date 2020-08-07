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

  componentDidMount() {
    this.props.clearErrors()
  }

  render() {

    const { errors } = this.props

    const username = (
      <div className={errors['username'] ? 'username-container error-username-container' : `username-container`}>
        <input
          type='text'
          value={this.state.username}
          onChange={this.handleInput('username')}
          className='username-input-box'
          placeholder='username'
          />
          <label className='username-label'>Username</label>
          <label className='error-email'>{errors['username'] ? errors['username'] : ''}</label>
      </div>);

    const loginTag = (
      <a className='tag' href="#/login">Login now</a>
    );

    const signupTag = (
      <a className='tag' href="#/signup">Sign up now</a>
    );

    const {formType} = this.props

    return (
      <div className='session-top-container'> 
        <div className='session-header'>
          <a href="#/">
          <img src={window.netflix_logo} className='netflix-logo-session-form' />
          </a>
        </div>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <div className='session-input'>
              <h2 className='form-title'>{formType}</h2>
              {formType === 'Sign Up' ? username : null}
            <div className={errors['email'] ? 'email-container error-email-container' : `email-container`}>
                <input
                  type='text'
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                  className='email-input-box'
                  placeholder="email"
                />
                <label className="email-label">Email</label>
               <label className='error-email'>{errors['email'] ? errors['email'] : ''}</label>
              </div>
            <div className={errors['password'] ? 'password-container error-password-container' : `password-container`}>
                <input
                  type='password'
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  className='password-input-box' 
                  placeholder='password'
                />
                <label className="password-label">Password</label>
                <label className="error-password">{errors['password'] ? errors['password'] : ''}</label>
              </div>
              <div className='btn-session-container'>
              <button className='submit-button' type='submit' value={formType}>{formType}</button>
              <button className='demo-button-session' onClick={this.handleDemo}>Demo</button>
            </div>
            <div className="bottom-text-container">
              <div className='bottom-text'>{formType === 'Sign Up' ? 'Already a Member?' : 'New to Netflix?' }</div>
              {formType === 'Sign Up' ? loginTag : signupTag }
            </div>
          </div>
        </form>
      </div>
    )
  }
}
