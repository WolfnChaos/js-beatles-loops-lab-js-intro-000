// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = []

  for (let i = 0; i < musicians.length + 1; i++) {
    theBeatlesPlay.push(musicians[i] + `plays` + instruments[i])
  }

  return theBeatlesPlay
}
