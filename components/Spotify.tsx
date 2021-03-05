import SpotifyCard from "./SpotifyCard";

const Spotify = ({ album, albumImageUrl, artist, songUrl, title }) => {
  return (
    <div>
      <div className="text-center sm:text-right mt-4">
        <SpotifyCard
          album={album}
          albumImageUrl={albumImageUrl}
          artist={artist}
          songUrl={songUrl}
          title={title}
        />
      </div>
      <p className="text-right mt-1 font-normal">
        PS: Here is the last song I listened on Spotify.
      </p>
    </div>
  );
};

export default Spotify;
