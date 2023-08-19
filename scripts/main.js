/*********************************************************************************
 *
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu.
 *
 *********************************************************************************/

lancerJeu();

const inputEcriture = document.getElementById("inputEcriture");
console.log(inputEcriture);

const btnValiderMot = document.getElementById("btnValiderMot");
console.log(btnValiderMot);

const divZoneProposition = document.querySelector(".zoneProposition");
console.log(divZoneProposition);

const spanScore = document.querySelector(".zoneScore span");
console.log(spanScore);

const ListeBtnRadio = document.querySelectorAll(".optionSource input");
console.log(ListeBtnRadio);
