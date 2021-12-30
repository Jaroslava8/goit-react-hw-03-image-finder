import React from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Modal from "./Components/Modal/Modal";
import LoaderSpinner from "./Components/Loader/Loader"

class App extends React.Component {
  state = {
    searchImage: "",
    openModal: null,
  };

  onSubmit = (search) => {
    this.setState({ searchImage: search });
  };
  onModal = (url) => {
    this.setState({ openModal: url });
  };

  render() {
    const { openModal, status } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
          {status === "pending" && <LoaderSpinner />}
        <ImageGallery
          search={this.state.searchImage}
          onModalClick={this.onModal}
        />
       
        {openModal && (
          <Modal largeImgURL={openModal} closeModal={this.onModal} />
        )}
      </div>
    );
  }
}

export default App;
