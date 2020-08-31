import React, { useContext } from 'react';

import NavBar from '../../components/NavBar';
import Search from '../../components/Search';
import Lyric from '../../components/Lyric';
import Loading from '../../components/Loading';
import { LyricContext } from '../../context/lyric';

import './styles.css';

const Main = () => {
  const { lyrics, loading } = useContext(LyricContext);

  return (
    <div className="main-container">
      <header>
        <NavBar />
        <Search />
      </header>
      <section>
        {loading ? (
          <Loading />
        ) : lyrics ? (
          <Lyric />
        ) : (
          <div className="no-results">
            <h1>Nenhum resultado.</h1>
          </div>
        )}
      </section>
    </div>
  );
};

export default Main;
