export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
  return { 
    type: ADD_FEATURE, 
    payload: feature
  };
};

export const removeFeature = id => {
  console.log("remove action firing")
  return { 
    type: REMOVE_FEATURE, 
    payload: id
  };
};

// export const removeFeature = feature => {
//   console.log("remove action firing")
//   return {
//     type: REMOVE_FEATURE,
//     payload: feature
//   }
// };