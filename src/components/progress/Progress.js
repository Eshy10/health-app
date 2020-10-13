import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ComposedChart, XAxis, YAxis, CartesianGrid, Area, Tooltip, Legend, Bar, Line,
} from 'recharts';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import BottomNavbar from '../bottomNav/bottomNav';
import HealthApi from '../../api/healthTracker';
import { getMeasurements } from '../../redux/actions/index';
import useStyles from './Progress.styles';

const PieChatPage = ({ ...props }) => {
  const dispatch = useDispatch();

  const classes = useStyles(props);

  const allMeasurements = useSelector(state => state.measurements);
  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const getCategory = () => {
      HealthApi.getAllMeasurements().then(data => {
        dispatch(getMeasurements(data));
      }).catch(error => { throw (error); });
    };
    getCategory();
  }, [dispatch]);
  if (!allMeasurements) {
    return null;
  }

  const date = () => {
    let date;
    return allMeasurements.map(measure => {
      date = measure.date;
      return formatDate(date);
    });
  };

  return (
    <div>
      <Navbar />
      <div className={classes.root}>

        <ComposedChart width={730} height={350} data={allMeasurements}>
          <XAxis dataKey={date} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="measure_category_id" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="measure_category.name" barSize={20} fill="#2AD042" />
          <Line type="monotone" dataKey="value" stroke="#1C85D0" />
        </ComposedChart>
      </div>
      <BottomNavbar />
    </div>
  );
};

PieChatPage.propTypes = {
  props: PropTypes.func,
  type: PropTypes.string,

};

PieChatPage.defaultProps = {
  props: () => {},
  type: 'category',
};

export default PieChatPage;
