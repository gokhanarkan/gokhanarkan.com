import SpotifyCard from "./SpotifyCard";

const Spotify = ({ album, albumImageUrl, artist, songUrl, title, position }) => {
  return (
    <div className={"text-center sm:text-" + position}>
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
