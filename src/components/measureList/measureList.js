import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MeasureCategoryCard from '../measureCard/measureCard';
import HealthApi from '../../api/healthTracker';
import { getCategories } from '../../redux/actions/index';
import useStyles from './MeasureList.styles';

const MeasureCategoryList = ({ props }) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const allCategories = useSelector(state => state.categories);

  useEffect(() => {
    const getCategory = () => {
      HealthApi.getMeasureCategories().then(data => {
        dispatch(getCategories(data));
      }).catch(error => { throw (error); });
    };
    getCategory();
  }, [dispatch]);
  if (!allCategories) {
    return null;
  }
  return (
    <div>
      <h2 className={classes.mainTitle} style={{ color: 'GrayText', fontFamily: 'fangsong' }}>Choose a category to start tracking</h2>
      <Grid container className={classes.root} spacing={3}>
        {
        allCategories.map(category => (
          <Grid key={category.id} item xs={12} sm={6} md={6} className={classes.control}>
            <MeasureCategoryCard id={category.id} name={category.name} />
          </Grid>
        ))
    }
      </Grid>
    </div>

  );
};

MeasureCategoryList.propTypes = {
  props: PropTypes.func,
};

MeasureCategoryList.defaultProps = {
  props: () => {},
};

export default MeasureCategoryList;
