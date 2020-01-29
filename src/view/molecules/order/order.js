import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Typography, Divider } from '@material-ui/core';
import OptionsAndExtras from '../../molecules/options-and-extras/options-and-extras';
import Card from '../../molecules/card/card';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function Order({ breakfast, name, table, burger, sideDish, beverages, onSubmit, onCancel }) {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('breakfast');
  const [extraModal, setExtraModal] = useState(null)

  function handleSubmit() {
    onSubmit({
      table,
      name,
      items,
      bill: total()
    })
  }

  function toggleFilter(toggle) {
    setFilter(toggle)
  }

  function addItem(item) {
    setItems([
      ...items,
      item
    ])
  }

  function removeItem(item) {
    setItems([
      ...items.filter(i => i.uid !== item.uid)
    ])
  }

  function total() {
    return items.reduce((acc, item) => {
      acc += item.price

      if (item.extras) {
        acc += 1
      }
      return acc
    }, 0)
  }

  return (
    <>
      {extraModal && <OptionsAndExtras
        burger={extraModal}
        onSubmit={(item) => addItem(item)}
        onClose={() => setExtraModal(null)}
      />}

      <Box
        bgcolor="#F1F1F1"
        minHeight="100vh"
        display="flex"
        color="#444444"
        flexDirection="column"
      >
        {/* MENU */}
        <Box
          display="flex"
          justifyContent="center"
          bgcolor="#9C2B08"
          height="60px"
        >
          <Box p="12px" maxWidth="768px" width="100%">
            <ButtonGroup variant="text">
              <Button onClick={() => toggleFilter('breakfast')}>CAFÉ DA MANHÃ</Button>
              <Button onClick={() => toggleFilter('lunch')}>ALMOÇO</Button>
            </ButtonGroup>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="flex-start"
        >

          <Box m="20px">
            {filter === 'breakfast' && (
              <Card
                title="CAFE DA MANHA"
                items={breakfast}
                onAdd={(item) => addItem({ ...item, uid: item.id + Date.now() })
                }
              />
            )}

            {filter === 'lunch' && (
              <Card
                title="HAMBURGER"
                items={burger}
                onAdd={(item) => setExtraModal({ ...item, uid: item.id + Date.now() })
                }
              />
            )}

            {filter === 'lunch' && (
              <Card
                title="ADICIONAIS"
                items={sideDish}
                onAdd={(item) => addItem({ ...item, uid: item.id + Date.now() })
                }
              />
            )}

            {filter === 'lunch' && (
              <Card
                title="BEBIDAS"
                items={beverages}
                onAdd={(item) => addItem({ ...item, uid: item.id + Date.now() })
                }
              />
            )}
          </Box>

          <Box
            m="20px"
            ml="0"
            bgcolor="#FFFFFF"
            width="350px"
            borderRadius="8px"
          >
            <Box p="10px">
              <Typography variant="subtitle1">
                <b>RESUMO DO PEDIDO</b>
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box p="10px">
                <Typography><b>MESA:{table}</b></Typography>
              </Box>
              <Box p="10px" pt="0">
                <Typography><b>NOME:{name}</b></Typography>
              </Box>
            </Box>

            <Divider />

            {items.map((item) => (
              item.burger ?

                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p="10px"
                  >
                    <Box>
                      <Box>
                        <Typography>({item.options})</Typography>
                      </Box>
                      <Box justifyContent="space-between" display="flex">
                        <Box>
                          <Typography>{item.name}</Typography>
                        </Box>
                        <Box pl="30px">
                          <Typography>{formatter.format(item.price)}</Typography>
                        </Box>
                      </Box>
                      {item.extras && (
                        <Box justifyContent="space-between" display="flex">
                          <Box>
                            <Typography>+ {item.extras}</Typography>
                          </Box>
                          <Box>
                            <Typography>R$ 1,00</Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>

                    <Box>
                      <Box pt="10px">
                        <Button variant="contained" size="small" onClick={() => removeItem(item)}>
                          <b>-</b>
                        </Button>
                      </Box>
                    </Box>

                  </Box>
                  <Divider />
                </Box>


                :

                <Box key={item.uid}>
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
                        <Button variant="contained" size="small" onClick={() => removeItem(item)}>-</Button>
                      </Box>
                    </Box>
                  </Box>

                  <Divider />
                </Box>
            ))}

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box p="10px">
                <Typography><b>TOTAL</b></Typography>
              </Box>
              <Box p="10px">
                <Typography><b>{formatter.format(total())}</b></Typography>
              </Box>
            </Box>

            <Box m="10px">
              <Box pb="10px">
                <Button variant="contained" fullWidth size="large" onClick={handleSubmit}>
                  ENVIAR PARA PREPARO
							</Button>
              </Box>
              <Box>
                <Button variant="contained" fullWidth size="small" onClick={onCancel}>
                  CANCELAR PEDIDO
              </Button>
              </Box>
            </Box>
          </Box>

        </Box>

      </Box >
    </>
  );
}


export default Order;
