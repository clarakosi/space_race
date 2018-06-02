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
  
export function Randomizer() {
    const colors = ['#FFFF00', '#FFA500', '#FF1493', '#FF0000', '#00FF00', '#008000', '#40E0D0', '#4682B4', '#B0C4DE', '#0000FF', '#A52A2A', '#C0C0C0', '#808080', '#000000'];

    const adjectives = ['orbital', 'planetary', 'cosmic', 'astral', 'astranomical', 'celestial', 'galactic', 'heavenly', 'intergalactic', 'lunar', 'martian', 'meteoric', 'solar', 'stellar', 'quantum', 'blazingly'];
  
    const nouns = ['nebula', 'epsilon', 'gundam', 'robo', 'lightspeed', 'supernova', 'antimatter', 'asteroid', 'black hole', 'cluster', 'comet', 'exoplanet', 'galling star', 'galaxy', 'moon', 'orb', 'wormhole', 'quasar', 'universe', 'Uranus', 'Pluto', 'Mars', 'martian', 'alien', 'Draconian', 'Grey', 'flux capacitor', 'invaders'];
  
    return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
  }
export default Randomizer;