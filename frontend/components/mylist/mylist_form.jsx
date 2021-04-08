import React from 'react';

class Mylist extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleAllList = this.handleAllList.bind(this);
    }

    handleLogout(e){
        e.preventDefault();
        return this.props.logout();
    }

    handleAllList(movieId) {
        const { movies } = this.props;

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === movieId) {
                return <li key={i}><video className="indv-movie" src={movies[i].movie_url} type="video/mp4" autoPlay={false} controls={true}></video></li>  
            }
         } 

    }

    componentDidMount() {
        this.props.fetchLists();
    }

    render(){
        
        const {mylist} = this.props;
        const allListId = mylist.map(list => (list.movie_id))

        return (
            <div>
                <div className='browser-container'> 
                    <div id='browser-id' className='browser-header'>
                        <a href="#"><img src={window.netflix_logo} className="netflix-logo-browser" /></a>
                             <ul className='navigation-menu'>
                                 <li className='navigation-tab'><a href="#">Home</a></li>
                                    <li className='navigation-tab'><a href="#">My List</a></li>
                             </ul>
                        < div className='navigation-menu-two'>
                            <button className='logout-button' onClick={this.handleLogout}>Logout</button>
                        </div>
                    </div>
                    <ul> 
                        {allListId.map(movieId => (this.handleAllList(movieId)))}
                    </ul>
                </div>

            </div>
        )
    }

}

export default Mylist;



