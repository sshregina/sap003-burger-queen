import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import Header from '../../molecules/header/header';
import CardKitchen from '../../molecules/card-kitchen/card-kitchen';
import { getOrder } from '../../../infra/services/firebaseQueries';



function Kitchen() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrder().then((orders) => {
      setOrders(orders)
      console.log(orders);

    })
  }, [])

  return (
    <Box>
      <Header />
      <CardKitchen
        orders={orders}
      />




    </Box>
  );
}


export default Kitchen;
