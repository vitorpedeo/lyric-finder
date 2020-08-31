import React, { useState, useEffect, useContext } from 'react';

import { LyricContext } from '../../context/lyric';

import './styles.css';

const Lyric = () => {
  const { artist, song, lyrics } = useContext(LyricContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const searchTerm = artist + ' ' + song;
    setSearch(searchTerm);
  }, [artist, song]);

  return (
    <div className="lyrics-container">
      <div className="panel-info">
        <p>
          {artist} <br /> {song}
        </p>
      </div>
      <a
        href={`https://www.youtube.com/results?search_query=${search}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Youtube
      </a>
      <p>{lyrics}</p>
    </div>
  );
};

export default Lyric;
