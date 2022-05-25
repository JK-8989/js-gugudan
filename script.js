
// for (let i = 1; i <= 9; i++){
//   document.write(`2 x ${i} = ${2*i}` +'<br>');
// }


// for (let i = 1; i <= 9; i++){
//   let j = 2;
//   document.write(`${j} x ${i} = ${j*i}` +'<br>');
//   j++
// }


// let k = 1;

// while (k <= 9) {
//   document.write( `3 x ` + k + ` = `  + (3 * k) +'<br/>');
//   k++;
// }

// document.write('<br/>'+'------------'+'<br/>');

// for (let j = 1; j <= 9; j++){
//   document.write('4 x ' +j+ ' = ' + (j * 4) + '<br/>');
// }

// let gugudan = (i) => {
//   for (j = 1; j < 10; j++) {
//     let result = i * j;
//     document.write(`${i}*${j}=${result}` + "<br>");
//   }
//   document.write("<br>");
// };

// gugudan(5)
// document.write("----------" + '<br>')

// let i = 2

// while(i<10){

// for (j = 1; j < 10; j++) {
//     let result = i * j;
//     document.write(`${i}*${j}=${result}` + "<br>");
//   }
//   document.write("<br>");
//   i++
// }

let i = 2

while (i < 10) {
  for(let j = 2; j < 10; j++){
    document.write(`${i} x ${j} = ${i*j}` + '<br>');
  }
  document.write('<br>')
  i++
}
