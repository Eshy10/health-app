import React from 'react';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './MeasureCard.styles';

const MeasureCategoryCard = ({ props, name, id }) => {
  const classes = useStyles(props);

  return (
    <Link to={`measurecard/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.title} style={{ color: '#42B5E8', fontWeight: 'bold' }} gutterBottom>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

MeasureCategoryCard.propTypes = {
  props: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

MeasureCategoryCard.defaultProps = {
  props: () => {},
};

export default MeasureCategoryCard;
