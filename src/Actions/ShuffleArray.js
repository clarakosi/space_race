export const SHUFFLE_ARRAY = 'shuffle_array';


export  function shuffleArray(array) {
   return {
    type: SHUFFLE_ARRAY,
    payload: array
  };
}