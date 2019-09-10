import React from 'react';
import PropTypes from 'prop-types';

const table = ({ columnWidth, gutters }) => (
  <div>
    {columnWidth.map((cW, i) => (
      <div key={`${columnWidth}${gutters[i]}`}>
        <p>
          width:
          {cW}
          , gutters:
          {gutters[i]}
        </p>
      </div>
    ))}
  </div>
);

table.propTypes = {
  columnWidth: PropTypes.instanceOf(Array).isRequired,
  gutters: PropTypes.instanceOf(Array).isRequired,
};

export default table;
