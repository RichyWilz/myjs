function telephoneCheck(str) {
    var numbervalidtor = /^1 \d{3} \d{3} \d{4}|\d{3}-\d{3}-\d{4}|\d{3} \d{3} \d{4}|\d{10}|(\d{3})\d{3}-\d{4}|(\d{3} \d{3}-d{4})  /;
    // console.log(numbervalidtor.test(str));
    if (numbervalidtor.test(str)){
        return true;
    }else{
        return false;
    }
}

console.log(telephoneCheck("(555-676-8096)"));