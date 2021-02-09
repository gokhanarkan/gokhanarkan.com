import { getRecentlyPlayed, simplifyData } from "../../../lib/spotify";

export default async (req, res) => {
  const response = await getRecentlyPlayed();
  const song = await response.json();
  if (response.status !== 200 || song.error) {
    res.statusCode = 500;
    return res.json({
      success: false,
      msg: song.error ? song.error : song,
    });
  }
  const data = await simplifyData(song.items[0].track);

  res.statusCode = 200;
  res.json({
    success: true,
    data,
  });
};
