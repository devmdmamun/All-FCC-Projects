function rot13(str) {
    let arr = str.split("");
    let obj = {
      A : "N", B : "O", C : "P", D : "Q", E : "R", F : "S",
      G : "T", H : "U", I : "V", J : "W", K : "X", L : "Y", 
      M : "Z", N : "A", O : "B", P : "C", Q : "D", R : "E",
      S : "F", T : "G", U : "H", V : "I", W : "J", X : "K",
      Y : "L", Z : "M"
    }
    let result = ""
    for (let i = 0; i < arr.length; i++) {
      if (obj.hasOwnProperty(arr[i])) {
      result += obj[arr[i]];
      } else {
        result += str[i];
      }
    }
    return result;
  }
  rot13("SERR PBQR PNZC");