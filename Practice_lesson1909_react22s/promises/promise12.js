'use strict';

/**
We've implemented most of thewaitOneSecondfunction. However, it's always in thependingstate. Fix the implementation so that it moves to thefulfilledstate after 1 second */

const waitOneSecond = () => {
  // write here
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve();
    }, 3000);
  })
};

// Sample usage - do not modify
waitOneSecond().then(() => {
  console.log('Done waiting.');
});
