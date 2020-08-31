import React from 'react';

import './styles.css';

const NavBar = () => {
  return (
    <nav>
      <p>
        <span>lyric</span>finder
      </p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vitor-pereira-309a7319b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vitorpedeo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://lyricsovh.docs.apiary.io/#reference"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
