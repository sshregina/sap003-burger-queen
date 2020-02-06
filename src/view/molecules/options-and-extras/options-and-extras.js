import React from 'react';
import { useState } from 'react';
import { Box, Typography, Button, Divider, Modal } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "8px",
    },
    formControl: {
      padding: "10px"
    },
  }),
);

function OptionsAndExtras({ onClose, onSubmit, burger }) {
  const classes = useStyles();
  const [options, setOtions] = useState(null);
  const [extras, setExtras] = useState(null);

  const handleSubmit = () => {
    if (options) {
      onSubmit({
        ...burger,
        options,
        extras
      })
      onClose()
    }
  }

  const handleOptions = (event) => {
    setOtions(event.target.value);
  };

  const handleExtras = (event) => {
    setExtras(event.target.value);
  };

  return (
    <Modal className={classes.modal} open>
      <div className={classes.paper}>

        <Box>
          <FormControl component="fieldset">
            <Box
              p="10px"
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Box>
                <Typography variant="subtitle1">
                  <b>OPÇÕES</b>
                </Typography>
              </Box>
              <Box>
              </Box>
            </Box>
            <Divider />
            <RadioGroup
              aria-label="options"
              name="optionsHamburger"
              value={options}
              onChange={handleOptions}
              className={classes.formControl}
            >
              <FormControlLabel
                value="FRANGO"
                control={<Radio />}
                label="FRANGO"
              />
              <FormControlLabel
                value="CARNE"
                control={<Radio />}
                label="CARNE"
              />
              <FormControlLabel
                value="VEGANO"
                control={<Radio />}
                label="VEGANO"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <Box p="10px">
              <Typography variant="subtitle1">
                <b>EXTRAS</b> (+ R$ 1)
									</Typography>
            </Box>
            <Divider />
            <RadioGroup
              aria-label="options"
              name="optionsHamburger"
              value={extras} onChange={handleExtras}
              className={classes.formControl}
            >
              <FormControlLabel
                value="OVO"
                control={<Radio />}
                label="OVO"
              />
              <FormControlLabel
                value="QUEIJO"
                control={<Radio />}
                label="QUEIJO"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box p="10px" display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            size="small"
            onClick={handleSubmit}
          >
            Enviar
					</Button>
          <Button
            variant="contained"
            aria-label="delete"
            onClick={onClose}
            size="small"
          >
            Fechar
          </Button>
        </Box>
      </div>
    </Modal>
  )
}

export default OptionsAndExtras;
