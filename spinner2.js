process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']; 

// for (const delay of delays) {
//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, delay);
//   delay += 200
// }

let counter = 0;

for (let i = 0; i < 5200; i += 200) {
  setTimeout(() => {
    process.stdout.write(spinnerArray[counter % 4]); 
    counter += 1;
  }, i);
};
  
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 900)

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 1100)

// process.stdout.write('\n')