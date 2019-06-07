import Img from 'gatsby-image';
import React, {useState} from 'react';
import {StaticQuery, graphql} from 'gatsby';

const ImageBackground = () => {
  const [isLoaded, setIsLoaded] = useState (false);
  return (
    <StaticQuery
      query={graphql`
        query GifQuery {
          datoCmsSetting {
            gif {
              url
            }
            gifThumbnail {
              fluid(
                maxWidth: 1280
                imgixParams: { fm: "jpg", auto: "compress" }
              ) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      `}
      render={data => {
        const {gif, gifThumbnail} = data.datoCmsSetting;

        return (
          <div className="image-background">
            <Img
              fluid={gifThumbnail.fluid}
              className="image-background__img"
              style={{display: isLoaded ? 'hidden' : 'block'}}
            />
            <img
              decoding="async"
              src={gif.url}
              className="image-background__img"
              style={{display: isLoaded ? 'block' : 'hidden'}}
              onLoad={() => setIsLoaded (true)}
            />
          </div>
        );
      }}
    />
  );
};

export default ImageBackground;
