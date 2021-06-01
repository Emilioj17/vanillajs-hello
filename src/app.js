/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#generator").innerHTML = generatedomain();
  });
};

let generatedomain = () => {
  let pronoun = ["tu", "mi", "su"];
  let subject = [
    "magico",
    "tremenda",
    "linda",
    "fantastica",
    "terrible",
    "cotota"
  ];
  let noun = ["web", "pagina", "sitio", "page"];
  let extension = [".com", ".net", ".cl", ".xxx", ".ar.com", ".org", ".porn"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjectIndx = Math.floor(Math.random() * subject.length);
  let nounIndx = Math.floor(Math.random() * noun.length);
  let extensionsIndx = Math.floor(Math.random() * extension.length);

  return `www.${pronoun[proIndx]}${subject[subjectIndx]}${noun[nounIndx]}${extension[extensionsIndx]}`;
};
