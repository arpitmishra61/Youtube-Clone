import React from 'react'
import trendingVideos from "../config/trending"

const showTrendingVideos = () => {
    return <div className="trendingVideoScreen">
        {trendingVideos.items.map((video, index) => {


            return <div className="trendingVideo">
                <div className="videoImage mb-3">
                    <img src={video.snippet.thumbnails.medium.url} alt="" />
                    <div className="timeDuration px-1">
                        <strong>11:32</strong>
                    </div>

                </div>

                <div className="videoContent pl-3">
                    <h5>{video.snippet.title}</h5>
                    <p>{video.snippet.channelTitle}
                        {" "}
                        <i class="material-icons">
                            fiber_manual_record
                    </i>
                        {"  "}
                        {Math.floor(video.statistics.viewCount / 1000000) ?
                            <>{Math.floor(video.statistics.viewCount / 1000000)}M views</> : <>{Math.floor(video.statistics.viewCount / 1000)}K views </>}</p>
                    <p className="channelTitle">{video.snippet.description.slice(0, 170) + "..."}</p>

                </div>

            </div>
        })}

    </div>
}

export default function TrendingVideos() {
    return (
        <div className="p-4 mainScreen trendingScreen">
            {showTrendingVideos()}



        </div>
    )
}
