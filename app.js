'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);



/**
 * 数字の引数を渡すと引数列目のフィボナッチ数列を返す
 * @param {any} n 引数
 * @return {any} 引数列目のフィボナッチ数列の数
 */
function fib(n){
    //  Map(n) に存在している場合
    if (memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n - 1) +fib(n - 2);
    memo.set(n, value);
    return value;

}

// function fib(n){
//     if(n === 0){
//         return 0;
//     } else if (n === 1){
//         return 1;
//     }
//     return fib(n - 1) +fib(n - 2);
// }

const length = 40;
for (let i = 0; i<=length; i++){
    console.log(fib(i));
}

