/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { getMeasuresId } from '../../redux/actions/index';
import HealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNavbar from '../bottomNav/bottomNav';
import useStyles from './MeasureDetails.styles';

const MeasureDetails = ({ props }) => {
  const classes = useStyles(props);
  const formatDate = datetime => new Date(datetime).toDateString();
  const { measuredetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getMeasurementId = useSelector(state => state.measurement);

  useEffect(() => {
    const getCategory = () => {
      HealthApi.getAllMeasurementId(measuredetailsIndex).then(data => {
        dispatch(getMeasuresId(data));
      }).catch(error => { throw (error); });
    };
    getCategory();
  }, [dispatch, getMeasurementId, measuredetailsIndex]);
  if (!getMeasurementId) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <h2 className={classes.date}>
        {' '}
        Hi
        {getMeasurementId.user ? getMeasurementId.user.name : ''}
        {' '}
        :) your health stats at:
        {formatDate(getMeasurementId.date)}
      </h2>
      <div className={classes.root}>
        {getMeasurementId.measure_category ? getMeasurementId.measure_category.name === 'Cholestrol Level' ? <LocalHospitalIcon color="primary" style={{ fontSize: '5em' }} /> : <FitnessCenterIcon color="primary" style={{ fontSize: '5em' }} /> : ''}
        <h3 className={classes.title}>{getMeasurementId.measure_category ? getMeasurementId.measure_category.name : ''}</h3>
        <h4 style={{ color: 'red' }}>
          {getMeasurementId.value}
          {' '}
          <span>{getMeasurementId.measure_category ? getMeasurementId.measure_category.name === 'Cholestrol Level' ? 'mg' : 'kg' : ''}</span>
        </h4>
        <div style={{ borderColor: getMeasurementId.value > 80 ? '#eee8e8 #307bbe #307bbe #307bbe' : '#307bbe #307bbe #eee8e8 #eee8e8' }} className={classes.oval2} />
      </div>
      <BottomNavbar />
    </div>
  );
};

MeasureDetails.propTypes = {
  props: PropTypes.func,
};

MeasureDetails.defaultProps = {
  props: () => {},
};

export default MeasureDetails;
