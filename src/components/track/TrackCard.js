import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HealthApi from '../../api/healthTracker';
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


    return (
     <div>
     <Navbar/>
     {
         allMeasurements.map(measure => (
             <Link key={measure.id} to={`measuredetails/${measure.id}`}>
            <div key={measure.id} className={classes.tracks}>
            <div className={classes.root}>
            <div style={{ borderColor: measure.value > 80 ? '#eee8e8 #307bbe #307bbe #307bbe' : '#307bbe #307bbe #eee8e8 #eee8e8'}} className= {classes.oval2}></div>
          </div>
          <h4>{formatDate(measure.date)}</h4>
          <p className={classes.title}>{measure.measure_category ? measure.measure_category.name : ''}</p>
            </div>
            </Link>
         ))
     }
     <BottomNavbar/>
     </div>
    )
}


export default TrackCard;