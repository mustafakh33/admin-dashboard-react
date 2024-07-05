import React from 'react'
import  Pie  from './Pie';
import { Box } from '@mui/material';
import Header from '../../components/Header';

const PieChart = () => {
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Pie />
    </Box>
  )
}

export default PieChart
