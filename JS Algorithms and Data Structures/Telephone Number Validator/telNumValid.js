function telephoneCheck(str) {
    let reg = /^1? ?((\d{3}[- ]?)|(\(\d{3}\) ?))\d{3}[- ]?\d{4}$/g
    return reg.test(str)
  }
  
  telephoneCheck("(555) 555-5555");