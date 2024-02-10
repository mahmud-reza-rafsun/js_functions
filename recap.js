function add (price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);
console.log(bill, bill);

function toMath (num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;
}

const final = toMath(3,5);
console.log(final);

function oddEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const result = oddEven(2);
console.log(result);