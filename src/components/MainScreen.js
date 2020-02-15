import React from 'react'
import { useEffect, useState } from 'react'
import { apiKey, channels } from "../config/config"
let tempVideos = []
const fetchVideoDetails = async (channelId, videoState, setVideoState) => {


    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=4&key=${apiKey}`)

    const response2 = await res.json()
    tempVideos = [...tempVideos, ...response2.items]

    setVideoState(tempVideos)
}


const fetchVideosExtraDetails =
    async (video, videoState, setVideoState) => {

        const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&key=${apiKey}`);

        const response = await res.json();

        video.extraDetails = {
            channelImage: response.items[0].snippet.thumbnails.default.url,
            channelName: response.items[0].snippet.title

        }
        setVideoState([...tempVideos])



    }

export default function MainScreen() {
    const [videoState, setVideoState] = useState([])

    let setInitialVideos = () => {



        Object.keys(channels).forEach((category, index) =>

            channels[category].byId.forEach(channelId =>

                fetchVideoDetails(channelId, videoState, setVideoState)

            ))
    }




    let setExtraVideosDetail = () => {

        videoState.forEach((video) => {

            if (!video.extraDetails)

                fetchVideosExtraDetails(video, videoState, setVideoState)

        })

    }

    useEffect(setInitialVideos, [])
    useEffect(setExtraVideosDetail, [videoState])




    if (videoState.length === 0) {
        console.log("rendering-1")
        return (
            <div className="mainScreen">Loading</div>
        )
    }
    else {
        console.log("rendering-2")
        console.log("state", videoState)
        return <div className="mainScreen">
            {videoState.map((video, i) => {


                return <div className="videoContainer my-3" key={i}>


                    <img src={video.snippet.thumbnails.medium.url} alt="" />
                    <div className="content">
                        {video.extraDetails ?
                            <img src={video.extraDetails.channelImage} alt="" />
                            : null}
                        <div className="details">
                            <p>{video.snippet.title.length > 44 ? video.snippet.title.slice(0, 44) + "..." : video.snippet.title}</p>
                            <p>{videoState.extraDetails ?
                                videoState.extraDetails.title
                                : null}</p>
                            <p>9.4M views</p>
                        </div>
                    </div>

                </div>
            })}
        </div>
    }



}
