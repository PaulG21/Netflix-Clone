import React from 'react';

class MovieForm extends React.Component {
  constructor(props){ 
    super(props);
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e){
    e.preventDefault();
    return this.props.logout();
  }

  render(){
    return (
      <div> UNDER CONSTRUCTION
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
};

export default MovieForm;