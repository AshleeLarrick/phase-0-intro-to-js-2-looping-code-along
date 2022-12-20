const gifts = ["teddy bear", "drone", "doll"];
const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    const thanks = []
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thanks;
}
function countDown(integer) {
    while (integer >= 0) {
        console.log(integer--);
    }
}