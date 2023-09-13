function convertToRoman(num) {
    var checkifnotdigits = /\D/;
    var checkifdigits = /\d/;

    if (checkifnotdigits.test(num)){
        console.log("These aren't numbers. Input digits only");
    }else if(checkifdigits.test(num)){
        const romanNumerals = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        var romanNumeral = '';
        
        for (var key in romanNumerals) {
            while (num >= romanNumerals[key]) {
            romanNumeral += key;
            num -= romanNumerals[key];
            }
        }
        return romanNumeral;
    }else{
        console.log('not right entry, try again');
    } 
}

console.log(convertToRoman(3999));