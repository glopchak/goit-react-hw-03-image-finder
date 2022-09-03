import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal }) => (
  <ul className="ImageGallery">
    {images.map(image => {
      return (
        <ImageGalleryItem
          key={image.id}
          largeImageURL={image.largeImageURL}
          webformatURL={image.webformatURL}
          toggleModal={toggleModal}
        />
      );
    })}
  </ul>
);


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        largeImageURL: PropTypes.string,
        webformatURL: PropTypes.string,
      })
    ),
  };