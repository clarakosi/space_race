export const SHUFFLE_ARRAY = 'shuffle_array';

/* **
 *
 * 
 * randomize the order of teams in the race view card
 * 
 */
export  function shuffleArray(array) {
   return {
    type: SHUFFLE_ARRAY,
    payload: array
  };
}