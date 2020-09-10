import React from 'react';
// left off on working on a custom play button, also figure out how to make the video stop
// when it is out of view. Thinking use scroll event like (check application.html.erb)
class MovieForm extends React.Component {
  constructor(props){ 
    super(props);
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e){
    e.preventDefault();
    return this.props.logout();
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render(){

    const { movies } = this.props;
     
    if (movies.length === 0) {
      return null;
    } 
    return (
      <div className='browser-container'> 
        <div id='browser-id' className='browser-header'>
          <img src={window.netflix_logo} className="netflix-logo-browser" />
          <ul className='navigation-menu'>
            <li className='navigation-tab'>Home</li>
            <li className='navigation-tab'>TV Shows</li>
            <li className='navigation-tab'>Movies</li>
            <li className='navigation-tab'>Latest</li>
            <li className='navigation-tab'>My List</li>
          </ul>
          <div className='navigation-menu-two'>
            <button className='logout-button' onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
        <div className='movies-container'>
          {/* Content goes here! */}
          <video className="main-movie" src={movies[1].movie_url} type="video/mp4" autoPlay={true} controls={true}></video>
          <img src={window.John_Wick_3_logo} className="john-wick-3-logo" />
          <div className="main-movie-description">Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York.</div>
        </div>
      </div>
    )
  }
};

export default MovieForm;
