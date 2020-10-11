import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getMeasuresId} from '../../redux/actions/index';
import HealthApi from '../../api/healthTracker';
import Navbar from '../../components/navbar/Navbar';
import BottomNavbar from '../../components/bottomNav/bottomNav';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './MeasureDetails.styles'

const MeasureDetails = ({props}) => {
    const classes = useStyles(props);
    let { measuredetailsIndex } = useParams()
    const dispatch = useDispatch();
    const getMeasurementId = useSelector(state => state.measurement);

    useEffect(() => {
        const getCategory = () => {
          HealthApi.getAllMeasurementId(measuredetailsIndex).then(data => {
            dispatch(getMeasuresId(data));
          }).catch(error => console.log(error));
        };
        getCategory();
      }, [dispatch, getMeasurementId, measuredetailsIndex]);
      if (!getMeasurementId) {
          return null
      }
  
      console.log(getMeasurementId)
   
    return (
        <div>
        <Navbar/>
        <div className={classes.root}>
        {getMeasurementId.measure_category ? getMeasurementId.measure_category.name === 'Cholestrol Level' ? <LocalHospitalIcon color="primary" style={{ fontSize: '2em'}}/> : <FitnessCenterIcon color="primary" style={{ fontSize: '2em'}}/> : ''}
        <CircularProgress variant="static" value={getMeasurementId.value}/>
        <h3 className={classes.title}>{getMeasurementId.measure_category ? getMeasurementId.measure_category.name : ''}</h3>
        <h4 style={{ color: 'red'}}>{getMeasurementId.value}</h4> 
        </div>
        <BottomNavbar/>
        </div>
    )
}

export default MeasureDetails;