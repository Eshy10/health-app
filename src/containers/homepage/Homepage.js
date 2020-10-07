import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import BottomNavbar from '../../components/bottomNav/bottomNav';
import MeasureCategoryList from '../../components/measureList/MeasureList';
import Container from '@material-ui/core/Container';

const Homepage = () => {
    return (
        <div className = 'homepage'>
        <Navbar/>
        <Container>
        <MeasureCategoryList/>
        </Container>
        <BottomNavbar/>
        </div>
    )
}

export default Homepage;