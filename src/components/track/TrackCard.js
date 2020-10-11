import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import HealthApi from '../../api/healthTracker';
import CircularProgress from '@material-ui/core/CircularProgress';
import BottomNavbar from '../../components/bottomNav/bottomNav.js'
import {getMeasurements} from '../../redux/actions/index';
import useStyles from './trackCard.styles';

const TrackCard = ({props}) => {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const allMeasurements = useSelector(state => state.measurements);

    const formatDate = datetime => new Date(datetime).toDateString()
  
    useEffect(() => {
      const getCategory = () => {
        HealthApi.getAllMeasurements().then(data => {
          dispatch(getMeasurements(data));
        }).catch(error => console.log(error));
      };
      getCategory();
    }, [dispatch]);
    if (!allMeasurements) {
        return null
    }

    console.log( allMeasurements)

    return (
     <div>
     <Navbar/>
     {
         allMeasurements.map(measure => (
            <div key={measure.id} className={classes.tracks}>
            <div className={classes.root}>
            <CircularProgress variant="static" value={measure.value} />
          </div>
          <h4>{formatDate(measure.date)}</h4>
          <p className={classes.title}>{measure.measure_category ? measure.measure_category.name : ''}</p>
            </div>
         ))
     }
     <BottomNavbar/>
     </div>
    )
}


export default TrackCard;