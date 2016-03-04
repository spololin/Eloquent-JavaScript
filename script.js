'use strict';

//Задание 3.2
//for (var i = 0; i < 100; i++) {
//    var mess = '';
//    if (i % 3 == 0) {
//        mess += 'Fizz';
//    }
//    if (i % 5 == 0) {
//        mess += 'Buzz';
//    }
//    console.log(mess || i);
//}

//Задание 3.3
//var size = 8;
//var line = '';
//for (var i = 0; i < size; i++) {
//    for (var j = 0; j < size; j++) {
//        if ((i + j) % 2 == 0) {
//            line += '#';
//        } else {
//            line += ' ';
//        }
//    }
//    line += '\n';
//}
//console.log(line);

//Задание 4.1
//function min(a,b) {
//    if (a > b) {
//        return b
//    } else {
//        return a
//    }
//}
//console.log(min(12, 7));

//Задание 4.2
//function isEven(value) {
//    if (value == 1) {
//        return false
//    } else if (value == 0) {
//        return true;
//    } else {
//        return isEven(value - 2);
//    }
//}
//console.log(isEven(-1));

//Задание 4.3
//function countBs(str, symbol) {
//    var i, total = 0;
//    for (i = 0; i < str.length; i++) {
//        if (str.charAt(i) == symbol) {
//            total++;
//        }
//    }
//    return total;
//}
//console.log(countBs('ПртиBет', 'т'));

//Задание 5.1
/*function range(a,b,c) {
 var arr = [], i, iter;
 if (c === 1) {
 iter = 1;
 } else {
 iter = c;
 }
 if (c < 0) {
 for (i = a; i >= b; i += iter) {
 arr.push(i);
 }
 } else {
 for (i = a; i <= b; i += iter) {
 arr.push(i);
 }
 }
 return arr;
 }

 function sum(arr) {
 var i, sum = 0;
 for (i = 0; i < arr.length; i++) {
 sum += arr[i];
 }
 return sum;
 }

 console.log(range(5,2,-1));*/

//Задание 5.2
/*function reverseArray(arr) {
 var i, revertArr = [];
 for (i = arr.length-1; i >= 0; i--) {
 revertArr.push(arr[i]);
 }
 return revertArr;
 }

 function reverseArrayInPlace(arr) {
 for (var i = 0; i < Math.ceil(arr.length / 2); i++) {
 var ctrl = arr[i];
 arr[i] = arr[arr.length - i - 1];
 arr[arr.length - i - 1] = ctrl;
 }
 return arr;
 }

 var arr = [0,1,2,3,4,5,6];
 console.log(reverseArray(arr));
 console.log(reverseArrayInPlace(arr));*/

//Задание 5.3
