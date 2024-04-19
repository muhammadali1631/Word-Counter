#! /usr/bin/env node

import inquirer from "inquirer"

let promt = await inquirer.prompt([{
    name: "sentence",
    message: "Enter your Sentence to count the word",
    type: "input"
}])

let word = promt.sentence.trim().split(" ");
console.log(word);

console.log(`your sentence to count the word ${word.length}`);