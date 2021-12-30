import styles from "../Modal/Modal.module.css";
import { createPortal } from "react-dom";
import React from "react";
import propTypes from "prop-types";

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.pressClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.pressClose);
  }

  onClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) this.props.closeModal();
  };

  pressClose = (event) => {
    if (event.code === "Escape") this.props.closeModal();
  };

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.onClickOverlay}>
        <div div className={styles.modal}>
          <img
            src={this.props.largeImgURL}
            alt="modalImage"
            className={styles.modalImage}
          />
        </div>
      </div>,
      document.querySelector("#modalImage")
    );
  }
}
export default Modal;
Modal.propTypes = {
  largeImgURL: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};
