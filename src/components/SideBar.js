import React from 'react'

export default function SideBar() {
    return (
         <div className="sideBar p-4">
            <div className="sideIcons active">
                <i className="material-icons">
                    home
                </i>

                <h5>Home</h5>
            </div>

            <div className="sideIcons ">
                <i className="material-icons">
                   trending_up
                </i>
                <h5>Trending</h5>
            </div>

            <div className="sideIcons ">
                <i className="material-icons">
                    subscriptions
                </i>
                <h5>Subscriptions</h5>
            </div>

            <hr/>

              <div className="sideIcons ">
                <i className="material-icons">
                    video_library
                </i>
                <h5>Library</h5>
            </div>

              <div className="sideIcons ">
                <i className="material-icons">
                   history
                </i>
                <h5>History</h5>
            </div>

              <div className="sideIcons ">
                <i className="material-icons">
                    watch_later
                </i>
                <h5>Watch Later</h5>
            </div>

             <div className="sideIcons ">
                <i className="material-icons">
                    local_movies
                </i>
                <h5>Movies</h5>
            </div>
            <div className="sideIcons ">
                <i className="material-icons">
                    sports_esports
                </i>
                <h5>Sports</h5>
            </div>
            <hr/>

             <div className="sideIcons ">
                <i className="material-icons">
                    settings
                </i>
                <h5>Settings</h5>
            </div>


             <div className="sideIcons ">
                <i className="material-icons">
                   flag
                </i>
                <h5>Report History</h5>
            </div>

             <div className="sideIcons ">
                <i className="material-icons">
                    help
                </i>
                <h5>Help</h5>
            </div>


             <div className="sideIcons ">
                <i className="material-icons">
                   announcement
                </i>
                <h5>Send Feedback</h5>
            </div>
        </div>
    )
}
