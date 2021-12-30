import styles from "../Searchbar/Searchbar.module.css";
import React from "react";
import propTypes from "prop-types";

class Searchbar extends React.Component {
  state = {
    search: "",
  };

  searchImages = ({ target }) => {
    return this.setState({ [target.name]: target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { search } = this.state;

    if (search.trim() === "")
      return alert(
        "We found 0 posts for your search, Please try searching again "
      );

    this.props.onSubmit(search);
    this.setState({ search: "" });
  };

  render() {
    const { search } = this.state;
    return (
      <div className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.submitForm}>
          <button className={styles.searchFormButton} type="submit"></button>
          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={search}
            onChange={this.searchImages}
          />
        </form>
      </div>
    );
  }
}
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
