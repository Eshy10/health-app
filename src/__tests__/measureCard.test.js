/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { shallow } from 'enzyme';
import MeasureCategoryCard from '../components/measureCard/measureCard';

describe('Measure Card', () => {
  const fieldProps = {
    id: 1,
    name: 'Weight',
  };

  it('should render a <Typography />', () => {
    const wrapper = shallow(<MeasureCategoryCard {...fieldProps} />);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it('should render <CardMedia />', () => {
    const wrapper = shallow(<MeasureCategoryCard {...fieldProps} />);
    expect(wrapper.find(CardContent)).toHaveLength(1);
  });
});
