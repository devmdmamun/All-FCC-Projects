function palindrome(str) {
    let arr = str.toLowerCase().split("");
    let reg = /[\W_]/;
    let alphanumeric = [];
    for (let i = 0; i < arr.length; i++) {
      if (reg.test(arr[i]) !== true) {
        alphanumeric.push(arr[i])
      }
    }
    let firstArr = alphanumeric.join("");
    let lastArr = alphanumeric.reverse().join("");
    return (firstArr == lastArr ? true : false);
  }
  palindrome("eye");