'use strict';

/**
Complete the function isPromoCodeValid such that it returns true when the promo code is valid 
and false otherwise.
/**
 * @param {boolean} code
 */

function isPromoCodeValid(code) {
  // const charLength = code.trim().length;
  // if(charLength >= 5 && charLength<=10){
  //   console.log("the length is ",charLength);
  // }
  // else{
  //   console.log("Invalid code");
  // }

  if(code.trim().length< 5){
    return false;

  }
  else if(code.trim().length >5){
    return true;
  }
}


// Sample usage - do not modify
const code = document.querySelector('#promo-code');

code.addEventListener('keyup', () => {
  let result = isPromoCodeValid(code.value);
  if (result) {
    code.classList.remove('error');
  } else {
    code.classList.add('error');
  }
});
