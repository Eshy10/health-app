import React from 'react';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './MeasureCard.styles'

const MeasureCategoryCard = ({props, name, id}) => {
  const classes = useStyles(props);

  return (
    <Link to={`measurecard/${name}`}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

export default MeasureCategoryCard;
