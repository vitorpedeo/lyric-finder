import React, { useState, useContext } from 'react';
import { IoIosSearch, IoIosMusicalNotes } from 'react-icons/io';

import { LyricContext } from '../../context/lyric';

import './styles.css';

const Search = () => {
  const { loading, searchLyrics } = useContext(LyricContext);
  const [searchedArtist, setSearchedArtist] = useState('');
  const [searchedSong, setSearchedSong] = useState('');

  const handleSearch = async e => {
    e.preventDefault();

    await searchLyrics({ artist: searchedArtist, song: searchedSong });
    setSearchedArtist('');
    setSearchedSong('');
  };

  return (
    <form onSubmit={handleSearch}>
      <h1>
        Encontre a letra da sua <span>música favorita</span>
      </h1>
      <p>Basta inserir as informações nos campos abaixo!</p>
      <div className="input">
        <IoIosSearch size={24} color="#23ce6b" />
        <input
          type="text"
          placeholder="Cantor(a)/Banda"
          value={searchedArtist}
          onChange={e => setSearchedArtist(e.target.value)}
        />
      </div>
      <div className="input">
        <IoIosMusicalNotes size={24} color="#23ce6b" />
        <input
          type="text"
          placeholder="Música"
          value={searchedSong}
          onChange={e => setSearchedSong(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        Pesquisar
      </button>
    </form>
  );
};

export default Search;
