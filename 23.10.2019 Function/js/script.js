//Task-1 [13,"Elgiz",17,"Memmed"]  cixishda: 13-Elgiz-17-Memmed

// let arr = [13, "Elgiz", 17, "Memmed"];

// let result = "";
// for (let i = 0; i < arr.length; i++) {
//     if (i == arr.length - 1) {
//         result += arr[i];
//     } else {
//         result += arr[i] + "-";
//     }
// }

// console.log(result)


//Task-2 kredit meblegi ve ay gelir, qaliq sonuncu aya yuklenmelidir.Mes: k.m=1000, 3 ayliq 1-333,2-333,334

// let credit = 800;
// let month = 6;
// let balance = credit % month;
// let payment = (credit - balance) / month;
// console.log(balance);
// console.log(payment);
// for (let i = 1; i <= month; i++) {

//     if (i != month) {
//         console.log(i + " ci ay odenishi: " + payment);
//     } else {
//         console.log(i + " ci ay odenishi: " + (payment + balance));
//     }
// }

//Task-3 ededlerden ibaret array-in max-nu tapmaq:

// let arr = [15, -7, 59, 34, -8];
// let max = arr[0]; //yani 15

// for (i = 1; i < arr.length; i++) {
//     if (max < arr[i])
//         max = arr[i];
// }
// console.log("En boyuk eded: " + max);