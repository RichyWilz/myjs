function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    // console.log(change);
    var draweramount = 0;
    const registerarray = [];    
    const name_curr = {
        "PENNY" : .01,
        "NICKEL" : .05,
        "DIME" : .10,
        "QUARTER" : .25,
        "ONE" : 1.00,
        "FIVE" : 5.00,
        "TEN" : 10.00,
        "TWENTY" : 20.00,
        "ONE HUNDRED" : 100.00
        }
        
    for (var i of cid){
        draweramount += i[1];
    }
    // console.log(draweramount.toFixed(2));
    if(draweramount < change.toFixed(2)){
       return {status: "INSUFFICIENT_FUNDS", change: registerarray };
    }else if (draweramount.toFixed(2) == change.toFixed(2)){
        return {status: 'CLOSED', change: cid };
    }else{ 
        var cr = cid.reverse();   
        for (var part of cr) {
          var atfirst = [part[0], 0];
        //   console.log(atfirst);
          while (change >= name_curr[part[0]] && part[1] > 0) {
            atfirst[1] += name_curr[part[0]];
            // console.log(atfirst);
            part[1] -= name_curr[part[0]];
            change -= name_curr[part[0]];
            change = change.toFixed(2);
          }
          if (atfirst[1] > 0) {
            registerarray.push(atfirst);
          }
        }
      }
      if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: registerarray };
      }
      return { status: "OPEN", change: registerarray };
    }
    // console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05],["DIME", 3.1],["QUARTER", 4.25],["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);