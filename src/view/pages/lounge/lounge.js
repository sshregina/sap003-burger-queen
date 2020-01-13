import React, { useState, useEffect } from 'react'
import { Box } from '@material-ui/core';
import HeadClientInfo from '../../molecules/head-client-info/head-client-info'
import Header from '../../molecules/header/header'
import Order from '../../molecules/order/order'
import { getMenu, saveOrder } from '../../../infra/services/firebaseQueries'


function Lounge() {
  const [order, setOrder] = useState({
    table: null,
    name: null,
    items: []
  })
  const [menu, setMenu] = useState({
    breakfast: [],
    burger: [],
    sideDish: [],
    beverages: [],

  })

  useEffect(() => {
    getMenu().then(([breakfast, burger, sideDish, beverages]) => {

      setMenu({
        breakfast, burger, sideDish, beverages
      })
    })

  }, [])

  const hasClient = order.table && order.name;

  // const hasClient = true;

  const handleClient = ({
    name,
    table
  }) => {
    setOrder({
      ...order,
      name,
      table
    })
  }

  return (
    <Box>
      <Header />

      {!hasClient && (
        <HeadClientInfo onSubmit={handleClient}
          onBack={() => alert("ola")} />
      )}
      {hasClient && <Order
        breakfast={menu.breakfast}
        burger={menu.burger}
        sideDish={menu.sideDish}
        beverages={menu.beverages}
        name={order.name}
        table={order.table}
        onSubmit={(order) => { saveOrder(order) }}
        onCancel={() => setOrder({
          table: null,
          name: null,
          items: []
        })}
      />
      }

    </Box>
  )
}

export default Lounge;
