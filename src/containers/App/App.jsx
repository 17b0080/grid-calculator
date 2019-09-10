/* eslint-disable consistent-return */
import React, { Component } from 'react';
import './App.scss';
import Table from '../../components/Table';
import Controls from '../../components/Controls';

const calculateGrid = ({
  wrapperWidth, multiplicity, margin, numberOfColumns,
}) => {
  if (Math.floor(wrapperWidth / multiplicity) !== wrapperWidth / multiplicity) return [[], []];
  const columnWidthRes = [];
  const guttersRes = [];
  for (let cW = multiplicity; cW <= wrapperWidth * 2 * margin; cW += multiplicity) {
    for (
      let gW = multiplicity;
      gW <= wrapperWidth - (cW * numberOfColumns);
      gW += 2 * multiplicity) {
      if (cW * numberOfColumns + gW * (numberOfColumns - 1) + margin * 2 === wrapperWidth) {
        columnWidthRes.push(cW);
        guttersRes.push(gW);
      }
    }
  }
  return [columnWidthRes, guttersRes];
};


class App extends Component {
  state = {
    wrapperWidth: 1024,
    multiplicity: 4,
    numberOfColumns: 3,
    margin: 24,
    columnWidth: [],
    gutters: [],
  }

  handleInputChange = (e, type) => {
    e.persist();

    const newState = {
      ...this.state,
      [type]: Number(e.target.value),
    };

    const {
      wrapperWidth,
      multiplicity,
      numberOfColumns,
    } = newState;

    if (wrapperWidth < 1 || multiplicity < 1 || numberOfColumns < 2) return 0;
    const [columnWidth, gutters] = calculateGrid(newState);

    this.setState({ ...newState, columnWidth, gutters });
  };

  render() {
    const {
      wrapperWidth, multiplicity, numberOfColumns, margin, columnWidth, gutters,
    } = this.state;
    const values = {
      wrapperWidth, multiplicity, numberOfColumns, margin,
    };

    return (
      <React.Fragment>
        <h1>Grid Calculator</h1>
        {/* eslint-disable max-len */}
        <p>Просчёт расстояний между колонками по заданной ширине обёртки колонок с некоторой кратностью сетки</p>
        {/* eslint-enable max-len */}
        <Controls values={values} change={this.handleInputChange} />
        <Table columnWidth={columnWidth} gutters={gutters} />
      </React.Fragment>
    );
  }
}

export default App;
