import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCart from "./VideoCart";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { setHomeVideo } from '../utils/appSlice';

const VideoContainer = () => {
  const open = useSelector((store) => store.app.open);
  // const { video, category } = useSelector((store) => store.app);
  const [video, setVideo] = useState([]);
  // console.log(category);
  // const dispatch = useDispatch();
  // jFor network call always use useEffect hook

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
      );
      // dispatch(setHomeVideo(res?.data?.items))
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };
  // const fetchVideoByCategory = async (category) => {
  //     try {
  //         const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
  //         dispatch(setHomeVideo(res?.data?.items))
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // useEffect(() => {
  //     if (category === "All") {
  //         fetchingYoutubeVideo();
  //     } else {
  //         fetchVideoByCategory(category);
  //     }
  // }, [category]);
  useEffect(() => {
    fetchingYoutubeVideo();
  },[]);

  return (
    <div className={`grid ${open ? "grid-cols-3" : "grid-cols-4"} gap-3`}>
      {video.map((item) => {
        console.log(item);
        return (
          //   <Link
          //     to={`/watch?v=${
          //       typeof item.id === "object" ? item.id.videoId : item.id
          //     }`}
          //     key={typeof item.id === "object" ? item.id.videoId : video.id}
          //   >
          <VideoCart key={item.id} item={item} />
          //   </Link>
        );
      })}
      {/* {
                video.map((item) => {
                    console.log(item);
                    return (
                        <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} key={typeof item.id === 'object' ? item.id.videoId : video.id } >
                            <VideoCart item={item} />
                        </Link>

                    )
                })
            } */}
    </div>
  );
};

export default VideoContainer;
