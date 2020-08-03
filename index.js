// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = []

  for (let i = 0; i < musicians; i++) {
    theBeatlesPlay.push(musicians[i] + `plays` + instruments[i])
  }

  return theBeatlesPlay
}
