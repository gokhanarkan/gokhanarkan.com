import SpotifyCard from "./SpotifyCard";

const Spotify = ({ album, albumImageUrl, artist, songUrl, title }) => {
  return (
    <>
      <SpotifyCard
        album={album}
        albumImageUrl={albumImageUrl}
        artist={artist}
        songUrl={songUrl}
        title={title}
      />
    </>
  );
};

export default Spotify;
