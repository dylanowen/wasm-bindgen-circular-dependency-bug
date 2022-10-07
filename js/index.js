// // const {use_clear_timeout} = await require('../pkg/');
// //
// console.log(`Using clearTimeout ${use_clear_timeout(2)}`);

console.log('Before loading');

import("../pkg/index.js").then(wasm => {
    console.log(`Using clearTimeout ${wasm.use_clear_timeout(2)}`);
}).catch(console.error);