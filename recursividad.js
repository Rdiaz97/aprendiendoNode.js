function recursiva_1(n) {
    if(n === 1 || n === 0){
        return n
    }else {
        console.log(n)
        return n + recursiva_1(n-1);
    }
}

console.log(recursiva_1(10))

let x=0;
let y=1;
let z;
function fibonacci(n) {
    if(n === 1){
        return n +"->"+ z;
    }
    z=x+y;
    console.log(z);
    x=y;
    y=z;
    return fibonacci(n-1);
}

console.log(fibonacci(10));

const fibonacci1 = n => {
    if (n<2) return n; 
    return fibonacci1(n-2) + fibonacci1(n-1)
}

console.log(fibonacci1(6));
