'use strict';

/**
Complete the function getFirstApp such that it returns the first element
from the apps array it receives as a parameter.

/**
 * @param {array} apps
 */
function getFirstApp(apps) {
    let elements = apps[0];
    return elements;

}

// Sample usage - do not modify
console.log(getFirstApp(["Chrome", "Clock", "Twitter"])); // "Chrome"
console.log(getFirstApp(["Clock", "Contacts"])); // "Clock"
