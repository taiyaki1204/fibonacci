'use strict';
/**
 * 数字の引数を渡すと引数列目のフィボナッチ数列を返す
 * @param {any} n 引数
 * @return {any} 引数列目のフィボナッチ数列の数
 */
function fib(n){
    if(n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    }
    return fib(n - 1) +fib(n - 2);
}

const length = 40;
for (let i = 0; i<=length; i++){
    console.log(fib(i));
}

