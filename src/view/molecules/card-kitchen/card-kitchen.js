import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';



function CardKitchen({ orders }) {
  return (
    <Box bgcolor="#F1F1F1" display="flex" color="#444444" minHeight="100vh" justifyContent="center">

      <Link to="/">Voltar</Link>

      <Box display="flex" flexDirection="column" alignItems="center">

        <Box textAlign="center" display="flex" py="40px">
          <Typography variant="h4">PEDIDOS PARA PREPARAR</Typography>
        </Box>
        {orders.map((item) => {
          return <Box key={item.id}>
            <Box bgcolor="#FFFFFF" width="500px" borderRadius="8px" justifyContent="space-around">
              <Box p="10px" >
                <Typography>STATUS:{item.status}</Typography>
                <Typography>NOME DO CLIENTE:{item.name}</Typography>
                <Typography>MESA:{item.table}</Typography>
                <Typography>HORÁRIO DO PEDIDO:{item.dispatchTime}</Typography>
                <Typography>ITENS DO PEDIDO:</Typography>
                {item.items.map((product) => {
                  return (

                    <Typography key={product.id}>
                      {product.name}
                      {' - '}
                      {product.extras ? product.extras : ''}
                      {' - '}
                      {product.options ? product.options : ''}
                    </Typography>


                  )


                })}
              </Box>
              <Divider />
            </Box>
          </Box>
        })}

      </Box>

    </Box>
  )
}

export default CardKitchen;
