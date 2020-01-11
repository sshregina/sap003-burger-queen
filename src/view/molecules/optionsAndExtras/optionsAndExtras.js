import React from 'react';
import { useState } from 'react';
import { Box, Typography, Button, Divider, Modal } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
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
            // margin: theme.spacing(3),
            padding: "10px"
        },
    }),
);

function OptionsAndExtras() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [options, setOtions] = useState({});
    const [extras, setExtras] = useState({});


    const handleOptions = (event) => {
        setOtions((event.target).value);
    };

    const handleExtras = (event) => {
        setExtras((event.target).value);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Box bgcolor="#F1F1F1" height="898px" width="768px" display="flex" color="#444444" flexDirection="column" alignItems="center">
            <Box>
                <Button variant="contained" size="small" onClick={handleOpen}>+</Button>
            </Box>
            <Modal className={classes.modal} open={open}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Box>
                            <FormControl component="fieldset">
                                <Box p="10px" display="flex" justifyContent="space-between" alignItems="flex-start">
                                    <Box>
                                        <Typography variant="subtitle1"><b>OPÇÕES</b></Typography>
                                    </Box>
                                    <Box>
                                        <Button aria-label="delete" onClick={handleClose} size="small">
                                            x
                                        </Button>
                                    </Box>
                                </Box>
                                <Divider />
                                <RadioGroup aria-label="options" name="optionsHamburger" value={options} onChange={handleOptions} className={classes.formControl}>
                                    <FormControlLabel value="chicken" control={<Radio />} label="FRANGO" />
                                    <FormControlLabel value="meat" control={<Radio />} label="CARNE" />
                                    <FormControlLabel value="vegan" control={<Radio />} label="VEGANO" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <Box p="10px">
                                    <Typography variant="subtitle1"><b>EXTRAS</b> (+ R$ 1)</Typography>
                                </Box>
                                <Divider />
                                <RadioGroup aria-label="options" name="optionsHamburger" value={extras} onChange={handleExtras} className={classes.formControl}>
                                    <FormControlLabel value="chicken" control={<Radio />} label="OVO" />
                                    <FormControlLabel value="meat" control={<Radio />} label="QUEIJO" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box p="10px">
                            <Button variant="contained" size="small" onClick={handleClose}>Enviar</Button>
                        </Box>
                    </div>
                </Fade>
            </Modal>
        </Box>
    )
}

export default OptionsAndExtras;