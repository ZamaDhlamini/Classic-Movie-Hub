import axios from 'axios';

const API_KEY = 'u7fj2wGyZSRHoYjE3KsG4EYO2UukXfCb4H4as0fgUhOMeZxLCyNWhNTE';

export async function fetchVideo(videoId: number) {
  const response = await axios.get(`https://api.pexels.com/videos/videos/${videoId}`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  return response.data;
}
