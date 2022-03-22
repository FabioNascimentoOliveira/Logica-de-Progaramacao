/*var email = 'fabio.binholiver@gmail.com';
var telefone = '98950-8493';
console.log("meu email é " + email + ", meu telefone é" + telefone);
*/

var n1 = 5;
var n2 = 8;
var n3 = 4;
var n4 = 10;
var total;
var media = 4;

//total = n1 + n2;
/*total = n1 - n2;
total = n1 * n2;
total = n1 / n2;
total = n1 % n2;
total = n1**n2;
*/
total = (n1 + n2 + n3 + n4)/media;
if (total >= 7){
    console.log("Aprovado" + total);
} else if(total >= 5){
    console.log("Recuperação " + total);
} else{
    console.log("Reprovado " + total);
}