'use strict';

/**

For each of the exercises below only 11 simple excercises, assume you are starting with the following people array.

let people = ["Sergei", "Mariia", "Boris", "Abel"];

1. Using a loop, iterate through this array and console.log all of the people (also rewrite it using arrow function).
2. Write the command to remove "Sergei" from the array.
3. Write the command to remove "Abel" from the array.
4. Write the command to add "Mahalete" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Write the command to make a copy of the array using slice. The copy should NOT include "Sergei" or "Mariia".
7. Write the command that gives the indexOf where "Mariia" is located.
8. Write the command that gives the indexOf where "Foo" is located (this should return -1).
9. Redefine the people variable with the value you started with. Using the splice command, remove "Boris" from the array and add "Rakhi" and "Yulia". Your array should look like this when you are done ["Sergei", "Mariia", "Rakhi", "Yulia", "Abel"].
10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

/**
 */

 /**
  * @param {people[]} strings
  */

  const people = ["Sergei", "Mariia", "Boris", "Abel"];

  for(let i = 0;i<people.length; i++)
  {
    console.log("the name of the people is :", people[i]);
  }
// shift method remove elements from first end
  // let removeFristEle = people.shift();
  // console.log(removeFristEle);
  // console.log(people);

// pop method remove elements from last end
  // let removeLastEle = people.pop();
  // console.log(removeLastEle);
  // console.log(people);
// unshift method add elements from first end
  // let addFirstEle = people.unshift("Mahalete");
  // console.log(addFirstEle);
  // console.log(people);

// push method add elements from last end
  // let addEndEle = people.push("preeti");
  // console.log(addEndEle);
  // console.log(people);

  // let sliceTwo = people.slice(2);
  // console.log(sliceTwo);
  // console.log(people);

  let index = people.indexOf("Mariia");
  console.log(index);
  console.log(people);


  
