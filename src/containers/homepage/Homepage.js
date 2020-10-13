import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/navbar/Navbar';
import BottomNavbar from '../../components/bottomNav/bottomNav';
import MeasureCategoryList from '../../components/measureList/measureList';

const Homepage = () => (
  <div className="homepage">
    <Navbar />
    <Container>
      <MeasureCategoryList />
    </Container>
    <BottomNavbar />
  </div>
);

export default Homepage;
