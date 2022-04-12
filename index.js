// Code your solutions in this file

const stringNames = ["Bruce", "James", "John"];
const eventName = "birthday";

function writeCards(stringNames, eventName) {
  let cards = [];
  for (let i = 0; i < stringNames.length; i++) {
    cards.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
  }
  return cards;
}

writeCards(stringNames, eventName);


function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer--;
    }
    console.log(integer);
}

countDown(10);