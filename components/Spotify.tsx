import SpotifyCard from "./SpotifyCard";

const Spotify = ({ album, albumImageUrl, artist, songUrl, title }) => {
  return (
    <div className="text-left">
      <SpotifyCard
        album={album}
        albumImageUrl={albumImageUrl}
        artist={artist}
        songUrl={songUrl}
        title={title}
      />
    </div>
  );
};

export default Spotify;
