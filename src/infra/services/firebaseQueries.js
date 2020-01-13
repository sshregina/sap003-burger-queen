import firebase from '../../utils/firebase';

export function getBreakfast() {
  return new Promise((resolve) => {
    firebase.firestore().collection('menu')
      .get()
      .then((snapshot) => {
        const breakfastMenu = snapshot.docs.filter(docs => docs.data().breakfast).map((doc) => ({
          id: doc.id,
          ...doc.data()
        })
        )
        resolve(breakfastMenu);
      })
  })

}

export function getLunch() {
  return new Promise((resolve) => {
    firebase.firestore().collection('menu')
      .get()
      .then((snapshot) => {
        const lunchMenu = snapshot.docs.filter(docs => docs.data().lunch).map((doc) => ({
          id: doc.id,
          ...doc.data()
        })
        )
        resolve(lunchMenu);
      })
  })

}

export function getBurgers() {
  return new Promise((resolve) => {
    firebase.firestore().collection('menu')
      .get()
      .then((snapshot) => {
        const burgers = snapshot.docs.filter(docs => docs.data().burger).map((doc) => ({
          id: doc.id,
          ...doc.data()
        })
        )
        resolve(burgers);
      })
  })

}

export function getBeverages() {
  return new Promise((resolve) => {
    firebase.firestore().collection('menu')
      .get()
      .then((snapshot) => {
        const beverages = snapshot.docs.filter(docs => docs.data().beverages).map((doc) => ({
          id: doc.id,
          ...doc.data()
        })
        )
        resolve(beverages);
      })
  })

}

export function getSideDish() {
  return new Promise((resolve) => {
    firebase.firestore().collection('menu')
      .get()
      .then((snapshot) => {
        const sideDish = snapshot.docs.filter(docs => docs.data().sideDish).map((doc) => ({
          id: doc.id,
          ...doc.data()
        })
        )
        resolve(sideDish);
      })
  })

}

export function getMenu() {
  return Promise.all([
    getBreakfast(),
    getBurgers(),
    getSideDish(),
    getBeverages(),
  ])
}

export function saveOrder({ name, table, items, bill }) {
  firebase.firestore().collection('order')
    .add({
      name,
      table,
      items: items.map(item => {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          options: item.options || null,
          extras: item.extras || null
        }
      }),
      bill,
      dispatchTime: new Date().toLocaleString('pt-BR'),
      status: 'Encaminhado',
    })
}
