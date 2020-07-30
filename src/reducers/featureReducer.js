const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

export const featureReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            {...action.payload}
          ]
        }
      }
    case "REMOVE_FEATURE":
      return {
        // spread copies state (immutability) to a new object (we are returning an object "return {...}")
        ...state,
        // replacing value of additional price
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          // if we don't spread this, we will overwrite car with only features included --> obvs we want price/name/image too --> so we copy them and edit features value
          ...state.car,
          // filter returns a new array, that's why we don't need to wrap it in brackets
          // also, it only removes what we tell it and keeps everything else, so no spreading of features required
          features: state.car.features.filter(feature => feature !== action.payload)
        }
      }
    default:
      return state;
  }
}