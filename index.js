// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = []

  for (let i = 0; i < musicians.length; i++) {
    theBeatlesPlay.push(musicians[i] + ` plays ` + instruments[i])
  }

  return theBeatlesPlay
}

function johnLennonFacts(array) {
  var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

  let i = 0

  while (i < facts.length) {
    i += 1
    array.push(facts[i] + `!!!`)
  }
  return array
}
