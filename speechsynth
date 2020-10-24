/* crée un bouton et le place au dessus
- ajoute un écouteur qui initialise le speechSynthesis
 - enlève le bouton du DOM après usage
 */
 
const bouton = document.createElement('button');
const txtBouton = document.createTextNode('Démarre');
bouton.style.width = "100vw";
bouton.style.height = "100vh";
bouton.style.fontFamily = "inherit";
bouton.style.fontSize = "5rem";
bouton.style.backgroundColor = "transparent";
bouton.style.cursor = "pointer";
bouton.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  //initialise la synthèse vocale avec action de l'utilisateur
  speechSynthesis.speak(new SpeechSynthesisUtterance("début"));
  document.body.removeChild(bouton);
  // libère la mémoire (?)
  bouton.style = undefined;
  bouton.textContent = null;
});
// ajoute au DOM
bouton.appendChild(txtBouton);
document.body.appendChild(bouton);
// abandonne le son lorsqu'on ferme la page
window.onbeforeunload = function (e) {
  speechSynthesisInstance.cancel();
};
