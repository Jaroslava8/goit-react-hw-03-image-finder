import styles from "../Button/Button.module.css";
import propTypes from "prop-types";

export default function Button({ onClickButton }) {
  return (
    <button className={styles.Button} type="button" onClick={onClickButton}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClickButton: propTypes.func.isRequired,
};
