import React from 'react';

class Mylist extends React.Component{
    constructor(props){
        super(props);
        // this.removeFromMyList = this.removeFromMyList.bind(this);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e){
        e.preventDefault();
        return this.props.logout();
    }
     

    removeMyList(movie){
        this.props.removeFromMyList(movie.props.movie.id).then(this.props.fetchLists);
    }

    render(){
        let lists = [];
        const currentUser = this.props.currentUser;
        this.props.mylists.forEach(list => {
            if (list.user_id === parseInt(currentUser)){
                this.props.movies.forEach(movie => {
                    if (movie.id === list.movie_id){
                        lists.push(movie);
                    }
                })
            }
        })

        return (
        <div>
            <div className='browser-container'> 
                <div id='browser-id' className='browser-header'>
                    <a href="#"><img src={window.netflix_logo} className="netflix-logo-browser" /></a>
                        <ul className='navigation-menu'>
                            <li className='navigation-tab'><a href="#">Home</a></li>
                            <li className='navigation-tab'><a href="#">List</a></li>
                        </ul>
                    <div className='navigation-menu-two'>
                        <button className='logout-button' onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
      </div>
        )




    }


}

export default Mylist;