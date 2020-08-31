import React, { useState, createContext } from 'react';
import axios from 'axios';

import { capitalize } from '../utils/capitalizeWord';

export const LyricContext = createContext();

const LyricProvider = ({ children }) => {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);

  const searchLyrics = async data => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.lyrics.ovh/v1/${data.artist}/${data.song}`
      );
      const capitalizedArtist = capitalize(data.artist);
      const capitalizedSong = capitalize(data.song);

      setArtist(capitalizedArtist);
      setSong(capitalizedSong);
      setLyrics(response.data.lyrics);
      setLoading(false);
    } catch (error) {
      setArtist('');
      setSong('');
      setLyrics('');
      setLoading(false);
    }
  };

  return (
    <LyricContext.Provider
      value={{ artist, song, lyrics, loading, searchLyrics }}
    >
      {children}
    </LyricContext.Provider>
  );
};

export default LyricProvider;
