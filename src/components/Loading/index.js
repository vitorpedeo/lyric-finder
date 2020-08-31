import React from 'react';
import ReactLoading from 'react-loading';

import './styles.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <ReactLoading type={'bubbles'} color={'#23ce6b'} />
    </div>
  );
};

export default Loading;
