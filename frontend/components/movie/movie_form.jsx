import React from 'react';
import Slider from 'react-slick';
import { FiPlusCircle } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";


// left off on working on a custom play button, also figure out how to make the video stop
// when it is out of view. Thinking use scroll event like (check application.html.erb)
class MovieForm extends React.Component {
  constructor(props){ 
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleMyList = this.handleMyList.bind(this);
    this.handleGenIcon = this.handleGenIcon.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    return this.props.logout();
  }

  handleMyList(movieId){
    const {mylist, addToMyList, removeFromMyList} = this.props
    const all_movieId = mylist.map(list => (list.movie_id));

    return(e => {
      e.preventDefault();
        if (!all_movieId.includes(movieId)){
          addToMyList(movieId);
        }
        else if (all_movieId.includes(movieId)) {
          removeFromMyList(movieId);
        }
      })
    };

  handleGenIcon(movieId) {
    const {mylist} = this.props
    const all_movieId = mylist.map(list => (list.movie_id));

    if (all_movieId.includes(movieId)) return (<FaRegCheckCircle size= {20}/>)
    else return (<FiPlusCircle size= {20}/>);
  }

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchMyLists();
  }

  render(){
    
    const { movies } = this.props;
    const settings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 5,
      slidesToScroll: 6,
    };
     

    if (movies.length === 0) {
      return null;
    } 
    return (
      <div>
        <div className='browser-container'> 
         <div id='browser-id' className='browser-header'>
            <a href="#"><img src={window.netflix_logo} className="netflix-logo-browser" /></a>
            <ul className='navigation-menu'>
              <li className='navigation-tab'><a href="#">Home</a></li>
              {/* <li className='navigation-tab'>TV Shows</li> */}
              {/* <li className='navigation-tab'>Movies</li> */}
              {/* <li className='navigation-tab'>Latest</li> */}
              <li className='navigation-tab'><a href="#/mylist">My List</a></li>
            </ul>
           <div className='navigation-menu-two'>
              <button className='logout-button' onClick={this.handleLogout}>Logout</button>
           </div>
          </div>
          <div className='movies-container'>
            {/* Content goes here! */}
            <video className="main-movie" src={movies[1].movie_url} type="video/mp4" autoPlay={true} controls={false}></video>
            <div className="mylistbtn" onClick={this.handleMyList(movies[1].id)}> {this.handleGenIcon(movies[1].id)} </div>
            {/* <img src={window.john_wick} className="placeholder"/> */}
            <img src={window.John_Wick_3_logo} className="john-wick-3-logo" />
            <div className="main-movie-description">Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York.</div>
          </div>
        </div>  

        {/* Netflix Carosel */}
        <div className="slider-container">
        <div className= "row-header-title"> Popular on Netflix </div>
          <Slider {...settings}>
            <div>
              <img src={window.blacklist} className="movie_thumbnail" />
            </div>
            <div>
              <img src={window.emily_in_paris} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.hasta_los_dientes} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.my_next_guest} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.over_the_moon} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.queens_gambit} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.rebecca} className="movie_thumbnail"/>
            </div>
          </Slider>
        </div>

        <div className="slider-container">
        <div className= "row-header-title"> New Releases </div>
          <Slider {...settings}>
            <div>
              <img src={window.blacklist} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.emily_in_paris} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.hasta_los_dientes} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.my_next_guest} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.over_the_moon} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.queens_gambit} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.rebecca} className="movie_thumbnail"/>
            </div>
          </Slider>
        </div>

        <div className="slider-container">
        <div className= "row-header-title"> Trending Now </div>
          <Slider {...settings}>
            <div>
              <img src={window.blacklist} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.emily_in_paris} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.hasta_los_dientes} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.my_next_guest} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.over_the_moon} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.queens_gambit} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.rebecca} className="movie_thumbnail"/>
            </div>
          </Slider>
        </div>

        <div className="slider-container">
        <div className= "row-header-title"> Relentless Crime Thrillers </div>
          <Slider {...settings}>
            <div>
              <img src={window.blacklist} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.emily_in_paris} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.hasta_los_dientes} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.my_next_guest} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.over_the_moon} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.queens_gambit} className="movie_thumbnail"/>
            </div>
            <div>
              <img src={window.rebecca} className="movie_thumbnail"/>
            </div>
          </Slider>
        </div>

      </div>
    )
  }
};

export default MovieForm;
