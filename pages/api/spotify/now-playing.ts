import { getNowPlaying, simplifyData } from "../../../lib/spotify";

export default async (req, res) => {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    res.statusCode = 500;
    return res.json({
      success: false,
    });
  }

  const song = await response.json();
  const data = await simplifyData(song.item);
  res.statusCode = 200;
  res.json({
    success: true,
    data,
  });
};
