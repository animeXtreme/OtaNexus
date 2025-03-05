import React from "react";
import ReactDOM from "react-dom/client";
import animeData from "./animeData.js"; // Đảm bảo file `animeData.js` được import đúng

const AnimeList = ({ animes }) => {
    return (
        <div className="anime-list">
            {animes.map((anime) => (
                <div key={anime.title} className="anime-item">
                    <h2>{anime.title}</h2>
                    <p>{anime.introduction}</p>
                    <ul>
                        <li><strong>Manga:</strong> {anime.release.manga}</li>
                        <li><strong>Anime:</strong> {anime.release.anime}</li>
                    </ul>
                    <h4>Thể loại:</h4>
                    <ul>
                        {anime.genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                    <h4>Arcs:</h4>
                    <ul>
                        {anime.arcs.map((arc) => (
                            <li key={arc}>{arc}</li>
                        ))}
                    </ul>
                    <h4>Tác giả:</h4>
                    <p>{anime.author.name}</p>
                    <h4>Nhân vật:</h4>
                    <ul>
                        {anime.characters.map((character) => (
                            <li key={character}>{character}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

const button =({})=>{
}

const root = ReactDOM.createRoot(document.getElementById("main-content"));
root.render(<App />);
