import React from 'react';
import { fetchVideo } from '../utils/api';
import ReactPlayer from 'react-player';

const VideoPage: React.FC = () => {
  const [videoData, setVideoData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const videoId = 3944332; // Replace with the desired video ID

  React.useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const data = await fetchVideo(videoId);
        setVideoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching video:', error);
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [videoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!videoData) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      <h1>{videoData.title}</h1>
      <ReactPlayer url={videoData.video_files[0].link} controls={true} />
    </div>
  );
};

export default VideoPage;
