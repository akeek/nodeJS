// console.log(process.argv);
// console.log(process.pid);
// console.log(process.versions.node);

// [, , third, fourth] = process.argv
// console.log("Third: " + third + " Fourth: " + fourth);

// process.stdout.write("What's your name?!\n");

// process.stdin.on("data", name => {
//     process.stdout.write("Hello " + name.toString().trim() + "!");
//     process.exit();
// })

const [, , first, last] = process.argv;

console.log(`Your name is ${first} ${last}`);

