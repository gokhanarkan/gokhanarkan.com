import { getNowPlaying, simplifyData } from "../../../lib/spotify";
import { searchLyrics } from "../../../lib/genius";
import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req, res) {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    res.statusCode = 500;
    return res.json({
      success: false,
    });
  }

  const song = await response.json();
  const data = await simplifyData(song.item);
  const { title, artist } = data;

  const searchResults = await searchLyrics(title, artist);
  if (searchResults.meta.status !== 200) {
    res.statusCode = 422;
    res.json({
      success: false,
    });
  }

  const urlPath = searchResults.response.hits[0].result;

  const lyricsPage = await axios.get(`https://genius.com${urlPath.path}`);
  const $ = cheerio.load(lyricsPage.data);
  const lyrics = $("div.lyrics").text().trim();

  res.statusCode = 200;
  res.json({
    success: true,
    lyrics,
  });
}
