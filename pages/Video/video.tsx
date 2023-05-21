import React from 'react';
import { fetchVideo } from '../../utils/api';
import ReactPlayer from 'react-player';
import styles from './video.module.css';

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
    <div className={styles.videoContainer}>
      <h1 className={styles.title}>{videoData.title}</h1>
      <div className={styles.videoPlayer}>
        <ReactPlayer url={videoData.video_files[0].link} controls={true} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default VideoPage;
