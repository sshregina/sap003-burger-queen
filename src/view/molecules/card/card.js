import React from 'react';
import { Box, Typography, Divider, Button } from '@material-ui/core';

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const Card = ({ title, items, onAdd }) => {
    return (<Box
      bgcolor="#FFFFFF"
      width="350px"
      borderRadius="8px"
      mb="20px"
    >
      <Box p="10px">
        <Typography variant="subtitle1">
          <b>{title}</b>
        </Typography>
      </Box>
  
  
      {items.map((item) => (
        <Box key={item.id}>
          <Divider />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="10px"
          >
            <Box>
              <Typography>{item.name}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Box pr="10px">
                <Typography>{formatter.format(item.price)}</Typography>
              </Box>
              <Box>
                <Button variant="contained" size="small" onClick={() => onAdd(item)}>+</Button>
              </Box>
            </Box>
          </Box>
  
  
        </Box>
      ))}
    </Box>
    )
  }

export default Card;
