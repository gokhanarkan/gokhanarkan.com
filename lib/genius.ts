import fetch from "isomorphic-unfetch";

const { GENIUS_API: genius_api, GENIUS_AUTH: genius_auth } = process.env;

export const searchLyrics = async (title, artist) => {
  const geniusData = await fetch(`${genius_api}${title}%20${artist}`, {
    headers: {
      Authorization: genius_auth,
    },
  });

  return geniusData.json();
};
