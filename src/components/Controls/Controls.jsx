import React from 'react';
import PropTypes from 'prop-types';
import Control from './Control';

const controls = ({ values, change }) => (
  <div>
    {Object.keys(values).map(type => (
      <Control key={type} type={type} value={values[type]} onChange={e => change(e, type)} />
    ))}
  </div>
);

controls.propTypes = {
  values: PropTypes.shape({
    wrapperWidth: PropTypes.number.isRequired,
    multiplicity: PropTypes.number.isRequired,
    numberOfColumns: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired,
  }).isRequired,
  change: PropTypes.func.isRequired,
};

export default controls;
