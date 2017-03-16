function countdown(callback) {
  window.setTimeout(callback,2)
}

function createMultiplier(num) {
  return (x) => {return x * num}
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var multiplier = createMultiplier.bind(null, 2)
var doublerWithBind = createMultiplier.bind(null,2)
var triplerWithBind = createMultiplier.bind(null,3)
