import React from 'react';
import Grid from '@material-ui/core/Grid';
import MeasureCategoryCard from '../measureCard/MeasureCard';
import useStyles from './MeasureList.styles';

const MeasureCategoryList = ({props}) => {

    const classes = useStyles(props) 
    return (
     <div>
     <h2 style = {{color: 'GrayText', fontFamily: 'fangsong'}}>Choose a category to start tracking</h2>
     <Grid container className={classes.root} spacing={3}>
     <Grid  item={true} xs={12} sm={6} md={6} className={classes.control} >
     <MeasureCategoryCard  name = {'Weight'}  />
   </Grid> 
   <Grid  item={true} xs={12} sm={6} md={6} className={classes.control} >
   <MeasureCategoryCard  name = {'Cholestrol Level'} />
 </Grid>
     </Grid>
     </div>
    
    )}

export default MeasureCategoryList;