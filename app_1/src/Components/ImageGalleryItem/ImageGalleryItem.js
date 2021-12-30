import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";
import propTypes from "prop-types";

export default function ImageGalleryItem({
  url,
  tags,
  largeImageURL,
  onModalClick,
}) {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItemImage}
        src={url}
        alt={tags}
        onClick={() => onModalClick(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  url: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  onModalClick: propTypes.func.isRequired,
};
