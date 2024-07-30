"use strict";

var alunos = [{
  nome: "Tiago",
  notas: 10
}, {
  nome: "Gustavo",
  notas: 7
}, {
  nome: "Ellen",
  notas: 4
}, {
  nome: "Mayara",
  notas: 5
}, {
  nome: "jaime",
  notas: 6
}];
var aprovados = function aprovados(alunos) {
  return alunos.filter(function (alunos) {
    return alunos.notas >= 6;
  });
};
console.log(aprovados(alunos));