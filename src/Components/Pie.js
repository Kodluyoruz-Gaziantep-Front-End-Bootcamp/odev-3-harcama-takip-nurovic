import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { PieChart } from 'react-minimal-pie-chart';

const Pie = () => {

  const { expence } = useContext(GlobalContext);

  return (
  <PieChart
    data={expence}
  />
  )
}

export default Pie