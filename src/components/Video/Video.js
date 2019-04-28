import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ src }) => {
  if (!src) {
    return null;
  }
  return (
    <div className="embed-container">
      <iframe
        title="Video content iframe"
        src={src}
        width="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string,
};

export default Video;
