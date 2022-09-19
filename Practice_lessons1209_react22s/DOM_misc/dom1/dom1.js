'use strict';

/**
Complete the renderShoppingList function such that it renders an <li> element
for every item in the items array it receives.
Also, the order of the items should be the same as the one in the array.
So, the first item should show up first (at the top).


/**
 * @param {string[]} items
 */
const itemList = document.querySelector("#shopping-list");
const renderShoppingList = items => {
    for(const item of items){
        itemList.insertAdjacentHTML('afterend',`<li>${item}</li>`);
    }

};
// Sample usage - do not modify
const sampleList = ["Orange", "Banana", "Coffee", "Paper"];
console.log(renderShoppingList(sampleList));
