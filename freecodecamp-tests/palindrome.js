function palindrome(string){
    string = string.toUpperCase();
    var symbols = /[^A-Za-z0-9\s]/;
    var space = /\s/;
    var punctuation = /[\p{P}]/u;   
    const filterlist = string.split('').filter(item => !space.test(item) && !punctuation.test(item));
    // console.log(filterlist);
    var flreverse = [...filterlist].reverse();
    // console.log(flreverse);
    var flrstring = flreverse.join('');
    var actualstring = filterlist.join('');
    
    if (flrstring === actualstring){
        return true;
    } else{
        return false;
    }   
}

console.log(palindrome("A man, a plan, a canal. Panama"));
