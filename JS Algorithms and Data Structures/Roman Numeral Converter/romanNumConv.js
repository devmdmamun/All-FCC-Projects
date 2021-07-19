function convertToRoman(num) {
    let romObj = {
      M : 1000, CM : 900, D : 500, CD : 400, C : 100, XC : 90,
      L : 50, XL : 40, X : 10, IX : 9, V : 5, IV : 4, I : 1
    }
    let romanN = "";
    for (let i in romObj) {
      while (num >= romObj[i]) {
        romanN += i;
        num -= romObj[i];
      }
    }
    return romanN;
  }
  convertToRoman(649);