/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
/** let john = ages[0];
let Mary = ages[1];
let joe = ages[2]; */
let [john, mary, joe] = ages
console.log ('John', john, 'Mary', mary, 'Joe', joe);



// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log (mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "german", "spanish", "japenese"];
let [johnNative, johnSecondary] = languages;
console.log (johnNative, johnSecondary);
let [, , maryNative, marySecondary] = languages;
console.log (maryNative, marySecondary);


let languages2 = {
    firstLanguage : "english",
    secondLanguage : "french",
    thirdLanguage : "german",
    fourthLanguage : "japanese",
};
let {secondLanguage, fourthLanguage} = languages2;
console.log(secondLanguage, fourthLanguage);


// Using rest parameter syntax
