let moneyDirct = {
    "ONE HUNDRED" : 10000, "TWENTY" : 2000, 'TEN' : 1000, 
    "FIVE" : 500, "ONE" : 100, "QUARTER" : 25, "DIME" : 10, 
    "NICKEL" : 5, "PENNY" : 1
  };
  
  const tekOutMoneyFrmCid = (cngtopay, cidobj, cngtogiv, moneyType) => {
    if(cngtopay >= moneyDirct[moneyType] && cidobj[moneyType]) {
      if (cngtopay >= cidobj[moneyType]) {
        const cngtosubtract = cidobj[moneyType];
        cngtopay -= cngtosubtract;
        cngtogiv.push([moneyType, cngtosubtract / 100]);
        cidobj[moneyType] = 0;
      } 
      else {
        const cngtosubtract =
          Math.floor(cngtopay / moneyDirct[moneyType]) * moneyDirct[moneyType];
        cngtopay -= cngtosubtract;
        cngtogiv.push([moneyType, cngtosubtract/ 100]);
        cidobj[moneyType] -= cngtosubtract;
      }
    }
      return [cngtopay, cidobj, cngtogiv];
  };
  
  function checkCashRegister(price, cash, cid) {
    let cngtopay = Math.round((cash - price) * 100);
  
    let cidobj = cid.reduce((acc, [moneyType, amo]) => {
      return {
        ...acc,
        [moneyType] : Math.round(amo * 100)
      }
    }, {})
  
    let cngtogiv = [];
  
    let domination = Object.keys(moneyDirct);
    let mar = [cngtopay, cidobj, cngtogiv];
    domination.forEach(moneyType => {
        [cngtopay, cidobj, cngtogiv] = tekOutMoneyFrmCid(cngtopay, cidobj, cngtogiv, moneyType);
    })
    let cnglftincid = Object.values(cidobj).reduce((acc, amt) => acc + amt, 0);
    console.log(mar)
    if (cngtopay > 0) {
      return {status: 'INSUFFICIENT_FUNDS', change : []}
    } else if (cnglftincid > 0) {
      return {status : "OPEN", change: cngtogiv}
    } else {
     return {status: "CLOSED", change: cid};
    }
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  