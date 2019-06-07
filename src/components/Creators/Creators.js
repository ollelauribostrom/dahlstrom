import React from 'react';
import felix from './felix.gif';
import olle from './olle.gif';

const Creators = () => {
  return (
    <div className="creators">
      <div className="creator">
        <img className="creator__image" src={felix} />
        <span className="creator__title">Konstnären</span>
      </div>
      <div className="creator">
        <img className="creator__image" src={olle} />
        <span className="creator__title">Kodaren</span>
      </div>
    </div>
  );
};

export default Creators;
