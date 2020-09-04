import React from 'react';
import PropTypes from 'prop-types';

const Mistakes = ({mistakes}) => {
  if (mistakes === 0) {
    return (
      <div className="game__mistakes">
        <div className="correct"></div>
        <div className="correct"></div>
        <div className="correct"></div>
      </div>
    );
  }
  if (mistakes === 1) {
    return (
      <div className="game__mistakes">
        <div className="wrong"></div>
        <div className="correct"></div>
        <div className="correct"></div>
      </div>
    );
  }
  if (mistakes === 2) {
    return (
      <div className="game__mistakes">
        <div className="wrong"></div>
        <div className="wrong"></div>
        <div className="correct"></div>
      </div>
    );
  }
  return (
    <div className="game__mistakes">
      <div className="wrong"></div>
      <div className="wrong"></div>
      <div className="wrong"></div>
    </div>
  );
};

Mistakes.propTypes = {
  mistakes: PropTypes.number.isRequired
};

export default Mistakes;
