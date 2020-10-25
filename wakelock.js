/* copier-coller dans le script */
/* ne fonctionne que sur 
  - Chrome 85 sur android (Android 5)
  - Chrome 84 sur Desktop
  versions depuis juin 2020
  
  NE FONCTIONNE PAS sur
  - Safari
  - Firefox
  - Android Browser
  - Android 4.4 (chrome 81)
*/

let wakeLock = null;
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    //document.body.textContent = 'Wake Lock is active';
    console.log('Wake Lock est actif');
  } catch (e) {
    //document.body.textContent = `${e.name}, ${e.message}`
    console.error(`${e.name}, ${e.message}`);
  }
};
requestWakeLock();
