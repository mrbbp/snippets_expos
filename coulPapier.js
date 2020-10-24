/* reprend les couleurs de la gamme Clairefontaine Trophée 80g */
/* tire au hasard dans la liste une couleur de fond d'écran */
/* à placer après l'ajout du titre en h2 */

const coul = ["#fbA244","#A0D1E5","#b9DCC4","#ffbcfd","#fdc700","#53C0D5","#F7EAA7","#C9C6E0","#EEC1DA","#F9D1C5"];

const coulFond = coul[Math.floor(Math.random()*coul.length)];
console.log(coulFond);
document.body.style.backgroundColor = coulFond;
document.querySelector("main .sac").style.color = coulFond;
