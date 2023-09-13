function rot13(str) {
    str = str.toUpperCase();
    var na = /[^a-zA-Z]/;

    const dict = {
        A: 'N',
        B: 'O',
        C: 'P',
        D: 'Q',
        E: 'R',
        F: 'S',
        G: 'T',
        H: 'U',
        I: 'V',
        J: 'W',
        K: 'X',
        L: 'Y',
        M: 'Z',
        N: 'A',
        O: 'B',
        P: 'C',
        Q: 'D',
        R: 'E',
        S: 'F',
        T: 'G',
        U: 'H',
        V: 'I',
        W: 'J',
        X: 'K',
        Y: 'L',
        Z: 'M',
    }
    var newstringlist = [];
    var newstring = '';
    // let i = 0; i < str.length; i++

    for (var i in str) {
        var foundMatch = false;
        for (var key in dict) {
          if (str[i] === dict[key]) {
            newstringlist.push(key);
            foundMatch = true;
            break;
          }
        }
        if (!foundMatch && na.test(str[i])) {
          newstringlist.push(str[i]);
        }
      }
    newstring = newstringlist.join('');
     return console.log(newstring);
}

rot13("SERR PBQR PNZC.");
 