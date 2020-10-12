import React, { memo, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import BottomNavbar from '../../components/bottomNav/bottomNav.js';
import HealthApi from '../../api/healthTracker';
import {getMeasurements} from '../../redux/actions/index';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import useStyles from './Progress.styles';

const PieChatPage = ({props}) => {
  const  COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
    const dispatch = useDispatch();

    const classes = useStyles(props);
   const  CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

    const allMeasurements = useSelector(state => state.measurements);
  
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
  <div className={classes.root}>
  <PieChart width={730} height={300}>
  <Pie data={allMeasurements} color="#000000" dataKey="value" nameKey= "measure_category.name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
      {
          allMeasurements.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
      }
  </Pie>
  <Tooltip content={<CustomTooltip />} />
  <Legend />
</PieChart>
</div>
  <BottomNavbar/>
  </div>
    )
}

export default memo(PieChatPage)

