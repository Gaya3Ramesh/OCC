//Using Clousure

const clousure = (function () {
    let num = 33;
    return function () {
        add = num += 43;
        sub = num -= 21;
        mul = num *= 6;
        div = num /= 8;

        console.log("addition: "+add); 
        console.log("Subtraction: "+sub); 
        console.log("Multiplication: "+mul); 
        console.log("Division: "+div);   
    }
})();
clousure();
