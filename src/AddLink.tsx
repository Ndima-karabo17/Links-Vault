import React from 'react';
import './Styles.css';

const AddLink: React.FC = () => {
  return (
    <div className="all pink-background">
      <div className="form-wrapper">
        <h1 className="page-heading">Add Your Favorite Connection</h1>

        <form className="form-container">
          <label htmlFor="title">
            Title:
            <input type="text" className="input-field" required />
          </label>

          <label htmlFor="link">
            Link (URL):
            <input type="text" className="input-field" required />
          </label>

          <label htmlFor="description">
            Description:
            <input type="text" className="input-field" required />
          </label>

          <label htmlFor="tag">
            Tag (optional):
            <input type="text" className="input-field" />
          </label>

          <button type="submit" className="submit-button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddLink;
