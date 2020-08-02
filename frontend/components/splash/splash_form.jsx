import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
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
    return (
      <div className='splash-top-container'>
        <div className='splash-header'>
          <img src={window.netflix_logo} className="netflix-logo" />
          <button className='signin-button btn-splash' onClick={event => window.location.href = '/#/login'}>Sign In</button>
        </div>
        <div className='splash-card'>
          <h1 className='splash-card-title'>Unlimited movies, TV <br /> shows, and more.</h1>
          <h2 className='splash-card-subtitle'>Watch anywhere. Cancel anytime.</h2>
          <h3 className='splash-card-subtext'>Ready to watch? Select a option down below.</h3>
          <div className='btn-splash-container'>
            <button className='signup-button btn-splash' onClick={event => window.location.href = '/#/signup'}>Get Started</button>
            <button className='demo-button btn-splash' onClick={this.handleDemo}>Demo</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;