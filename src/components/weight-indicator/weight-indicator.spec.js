import React from 'react';
import WeightIndicator from './weight-indicator.component';
import renderer from 'react-test-renderer';

describe('Weight Indicator Compnent', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<WeightIndicator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders under weight correctly', () => {
    const tree = renderer.create(<WeightIndicator value={20} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders Over weight correctly', () => {
    const tree = renderer.create(<WeightIndicator value={100} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders Perfect correctly', () => {
    const tree = renderer.create(<WeightIndicator value={50} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
