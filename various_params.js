function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even size')
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}
// evenSizeString('Dhaka')
// evenSizeString('faka')

function doubleorTriple (number, doDouble) {
    if(number === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleorTriple(5, true)); 
// console.log(doubleorTriple(5, false));

function numberOffElements(number){
    const len = number.length;
    return len;
}

numberOffElements([12, 13, 14, 30]);