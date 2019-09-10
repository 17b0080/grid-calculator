import React from 'react';
import PropTypes from 'prop-types';

const types = {
  wrapperWidth: 'Ширина контейнера',
  multiplicity: 'Кратность',
  numberOfColumns: 'Кол-во колонок',
  margin: 'Отступ слева/справа',
};

const control = ({ type, ...rest }) => (
  <label htmlFor={type}>
    {types[type]}
    <input type="number" id={type} {...rest} />
  </label>
);

control.propTypes = {
  type: PropTypes.string.isRequired,
  rest: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default control;
