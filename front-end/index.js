// function meno(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache[key]) {
//       console.log("Valor retornado do cache");
//       return cache[key];
//     }

//     const result = fn(...args);

//     cache[key] = result;
//     console.log(cache);

//     return result;
//   };
// }

// function soma(a, b) {
//   return a + b;
// }

// const monoizedSoma = meno(soma);
// console.log(monoizedSoma(10, 10));
// console.log(monoizedSoma(10, 20));
// console.log(monoizedSoma(10, 20));
// console.log(monoizedSoma(10, 20));

const run = (locale = "en-US") => {
  const now = new Date();
};
