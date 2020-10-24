/* copier-coller dans le script */

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
