// function Spotify() {
//     return (

//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//         >
//             <h2>Songs I can't get enough of recently</h2>

//             <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '12px' }}>
//                 <iframe
//                     style={{ borderRadius: '12px' }}
//                     src="https://open.spotify.com/embed/playlist/2UiX47VboU8cd9A48ho6Il?utm_source=generator"
//                     width="100%"
//                     height="525"
//                     frameBorder="0"
//                     allowFullScreen=""
//                     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                     loading="lazy"
//                 ></iframe>
//             </div>
//         </motion.div>
//     );

// }

// export default Spotify

// function Spotify() {
//     return (
//         <div>
//             <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EQoqCH7BwIYb7?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
//             </iframe>
//         </div>
//     );
// }

// export default Spotify;
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
