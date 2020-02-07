import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';


function HeadClientInfo({ onSubmit, onBack }) {
  const [name, setName] = useState("")
  const [table, setTable] = useState("")

  const handleClick = () => {
    onSubmit({
      name,
      table
    })
  }

  return (
    <Box bgcolor="#F1F1F1" display="flex" color="#444444" minHeight="100vh" justifyContent="center" >
      <Box display="flex" alignItems="center" flexDirection="column" >
        <Box p="10px">
          <Button to='/kitchen' component={Link} variant="contained">PEDIDOS NA COZINHA</Button>
        </Box>
        <Box textAlign="center" display="flex" py="40px">
          <Typography variant="h4">DADOS DO CLIENTE</Typography>
        </Box>

        <Box bgcolor="#FFFFFF" width="500px" borderRadius="8px" justifyContent="space-around" >
          <Box p="10px">
            <Box p="10px">
              <Typography variant="h5" >MESA</Typography>
            </Box>
            <TextField type="number" variant="outlined" fullWidth value={table} onChange={(e) => setTable(e.target.value)} />

            <Box p="10px">
              <Typography variant="h5">NOME</Typography>
            </Box>
            <TextField variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
            <Box pt="20px" alignSelf="flex-end">
              <Button variant="contained" size="large" onClick={handleClick} fullWidth>Continuar</Button>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default HeadClientInfo;
