
import "../index.css"
function Spotify() {
    return (

        <>
            <h1 className="song-intro">My favourite R&B playlist</h1>
            <p className="song-justification">(I love the premade playlists that Spotify gives me)</p>
            <div className="spotify-page">
                <iframe
                    style={{ borderRadius: "12px" }}
                    // src="https://open.spotify.com/embed/playlist/37i9dQZF1EQoqCH7BwIYb7"
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1EQoqCH7BwIYb7?utm_source=generator&theme=0"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>

            </div >
        </>
    );
}

export default Spotify;
