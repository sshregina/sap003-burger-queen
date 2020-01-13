import React from 'react';
import "typeface-roboto";
import Lounge from './view/pages/lounge/lounge'
import { CssBaseline } from '@material-ui/core'

// import firebaseImpl from './utils/firebase'
// import { useEffect } from 'react'

// import { getBurgers, getBeverages, getSideDish, getBreakfast, getLunch } from './infra/services/firebaseQueries';

// getBurgers().then((burgers) => {
//   console.log(burgers);
// })

// getBeverages().then((beverages) => {
//   console.log(beverages);
// })

// getSideDish().then((sideDish) => {
//   console.log(sideDish);
// })

// getBreakfast().then((breakfast) => {
//   console.log(breakfast);
// })

// getLunch().then((lunch) => {
//   console.log(lunch);
// })

function App() {
  return (
    <div>
      <CssBaseline />
      <Lounge />
    </div>
  )
}


export default App;
