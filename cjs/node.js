console.log("Hola mundo");

// el objeto windows no existe en node.js

console.log(globalThis)

// globalThis una variable global en toda nuestra aplicacion

console.log(global)

// global => globalThis  TODO LO QUE ES GLOBAL SALE DE GLOBALTHIS 


global.console.log("hello");
globalThis.console.log("World");

// common js

const sum = require ("./sum");

console.log(sum(1,2));

// common js require module

const {resta}=require("./resta");

console.log(resta(1,2));


