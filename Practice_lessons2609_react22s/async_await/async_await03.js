'use strict';

/*
Rewrite/refactor the canVote function as an async arrow function.
*/

/**
 * @param {number} age
 */
// const canVote = age => {
//     return new Promise(resolve => {
//         resolve(age >= 18);
//     });
// }
const canVote = async(age) =>{
    return age >= 18;

}

// Sample usage - do not modify
canVote(20).then(result => {
    console.log(result); // true
});
canVote(15).then(result => {
    console.log(result); // false
});
