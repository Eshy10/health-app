import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Navbar from '../navbar/Navbar';
import HealthApi from '../../api/healthTracker';
import BottomNavbar from '../bottomNav/bottomNav';
import useStyles from './trackCard.styles';

const TrackCard = ({ props }) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const allMeasurements = useSelector(state => state.measurements);

  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const getCategory = () => {
      dispatch(HealthApi.getAllMeasurements());
    };
    getCategory();
  }, [dispatch]);
  if (!allMeasurements) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className={classes.measure}>
        {
        allMeasurements.map(measure => (
          <Link key={measure.id} to={`measuredetails/${measure.id}`}>
            <div key={measure.id} className={classes.tracks}>
              <div className={classes.root}>
                <div style={{ borderColor: measure.value > 70 ? '#eee8e8 #307bbe #307bbe #307bbe' : '#307bbe #307bbe #eee8e8 #eee8e8' }} className={classes.oval2} />
              </div>
              <h4 style={{ color: '#42B5E8', fontWeight: 'bold' }}>{formatDate(measure ? measure.date : '')}</h4>
              <p className={classes.title}>{measure.measure_category ? measure.measure_category.name : ''}</p>
              <ArrowForwardIosIcon style={{ color: 'grey', fontWeight: 'bold' }} />
            </div>
          </Link>
        ))
    }
      </div>
      <BottomNavbar />
    </div>
  );
};

TrackCard.propTypes = {
  props: PropTypes.func,

};

TrackCard.defaultProps = {
  props: () => {},
};

export default TrackCard;
