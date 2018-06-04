
/***
 * 
 * 
 * 
 * These are all helper functions to assist in choosing random elements from an array, and likewise producing an array of random elements.
 */
/*****get a random element from an array */
export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
export function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
/**** produces a random string ***/   
export function Randomize() {
    const adjectives = ['orbital', 'planetary', 'cosmic', 'astral', 'astranomical', 'celestial', 'galactic', 'heavenly', 'intergalactic', 'lunar', 'martian', 'meteoric', 'solar', 'stellar', 'quantum', 'blazingly'];
  
    const nouns = ['nebula', 'epsilon', 'gundam', 'robo', 'lightspeed', 'supernova', 'antimatter', 'asteroid', 'black hole', 'cluster', 'comet', 'exoplanet', 'galling star', 'galaxy', 'moon', 'orb', 'wormhole', 'quasar', 'universe', 'Uranus', 'Pluto', 'Mars', 'martian', 'alien', 'Draconian', 'Grey', 'flux capacitor', 'invaders'];
  
    return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
  }
/*****produces an array of length n, of colors */
export function RandomColor(n=1) {
    const ColorArray = ['#FFFF00', '#FFA500', '#FF1493', '#FF0000', '#00FF00', '#008000', '#40E0D0', '#4682B4', '#B0C4DE', '#0000FF', '#A52A2A', '#C0C0C0', '#808080', '#000000'];
    let tempArray = [];
    for (let i = 0; i < ColorArray.length; i++ ) {
        tempArray.push(i);
    }
    let choiceArray = [];
    for (let j = 0; j < n; j++) {
        let randIndex = rando(tempArray);
        let choice = ColorArray.splice(randIndex, 1);
        choiceArray.push(choice);
        }
    return choiceArray;
}
/****produces an array of length n,  of random team names. */
export function RandomTeams(n=1) {
  teamsArray=[];
  for (let i =0; i < n; i++) {
    let team = Randomize();
    teamsArray.push(team);
  }
  return teamsArray;
} 

/**
 * this part is tricky. previously, the action was set up incorrectly, because it calls for an impure function in the reducer.  Albeit the random function to shuffle the teams was fine on its own, but since I have to 
 * redo it, Ive expanded the random function to also randomize colors as well, and the random function will not modify its arguments, however, since it still calls for a random action, it is 
 * still impure.  NOTE:  to get around this I will pass the random return values as arguments to the action creator.
 * 
 * 
 * (in the actions file we will have this action creator)
 * 
* ex:     function RandomTeamAction(team) {
 *            return {
 *              type: 'RANDOM_TEAM_ACTION',
 *              payload: team
 *                     
 *            }
 *        }
 * **************************************************************************
 * 
 * outside of this elsewhere in the code we will do this:
 *        
 *        import RandomTeamAction from './Actions';
 *        import RandomTeams from './RandomGenerator';
 * 
 *        // somewhere in the component code we will dispatch the action like so:
 *        // NOTE: as usual we will probably need the context 'this', or 'this.props'
 *        
 *          RandomTeamAction(RandomTeams());
 * 
 * **************************************************************************
 *  Since the action creator is being passed the portion that caused the reducer to 
 *  originally be impure, we no longer get undesired side effects.  The randomizing logic
 *  is implemented outside of the reducer through the function below and finally handled by
 *  the action creator inside of the component.
 * 
 *      function RandomTeams();  which is defined above, so all that is needed is that both RandomTeamAction and RandomTeams be imported 
 *                               into the component that needs to use them.  This same rule applies for RandomColor.
 *     
 * 
 */
