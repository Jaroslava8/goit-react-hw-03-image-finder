import LoaderSpinner from "../Loader/Loader";
import styles from "../ImageGallery/ImageGallery.module.css";
import React from "react";
import ApiAddress from "../ApiAddress";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import propTypes from "prop-types";

class ImageGallery extends React.Component {
  state = {
    status: "idle",
    images: [],
    error: null,
    page: 1,
    pending: 1,
    loading: false,
  };

  componentDidUpdate(prevProps) {
    const prevResponse = prevProps.search;
    const nextResponse = this.props.search;

    if (prevResponse !== nextResponse) {
      this.setState({ images: [], page: 1 });
      this.loadImages(1);
    }
  }

  onClickButton = () => {
    this.loadImages(this.state.page);
  };

  loadImages = (page) => {
    const nextResponse = this.props.search;
    ApiAddress(nextResponse, page).then((response) => {
      if (typeof response !== "string") {
        this.setState((state) => {
          return {
            images: [...state.images, ...response.hits],
            status: "resolved",
            page: state.page + 1,
          };
        });
        return;
      }

      this.setState({
        error: response,
        status: "rejected",
        page: 1,
        images: [],
      });
    });
  };

  render() {
    const { images, status, error } = this.state;

    if (status === "rejected") {
      return <span>{error}</span>;
    }

    return (
      <>
        {images.length !== 0 ? (
          <>
            {this.state.loading && (
              <LoaderSpinner
                type="Puff"
                color=" #00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            )}
            <ul className={styles.imageGallery}>
              {images.map(({ id, webformatURL, tags, largeImageURL }) => {
                return (
                  <ImageGalleryItem
                    key={id}
                    url={webformatURL}
                    tags={tags}
                    onModalClick={this.props.onModalClick}
                    largeImageURL={largeImageURL}
                  />
                );
              })}
            </ul>
            {status === "pending" && <LoaderSpinner />}
            <Button onClickButton={this.onClickButton} />
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  search: propTypes.string.isRequired,
  onModalClick: propTypes.func.isRequired,
};
