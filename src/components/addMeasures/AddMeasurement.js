import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './AddMeasurement.styles'

const AddMeasureCard = ({props, name}) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AddMeasureCard;
