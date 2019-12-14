import React, {useEffect} from 'react';
import firebase from '../../sap003-burger-queen/src/Utils/Firebase/firebaseUtils';


function App() {
  useEffect(() => {
    firebase.firestore().collection('menu').get()
      .then(doc => {
        doc.forEach(docs => {
          console.log(docs.data());
        })
      })
  }, [])
  return(
    <div>vai funfa</div>
  )
}

export default App;
