function genRandom (limit) {
  return Math.round(Math.random()*limit)
}

function addRoute (item, link) {
  item.addEventListener('click', function () {
    window.location.href = link
  })
}

var indexDoorGood = genRandom(2)
var linkBad = 'https://www.youtube.com/watch?v=J---aiyznGQ'
var linkGood = 'https://www.youtube.com/watch?v=fzzjgBAaWZw'

var doors = document.querySelectorAll('.icon-door')

Array.prototype.map.call(doors, function (door, index) {
  if (index === indexDoorGood)
    return addRoute(door, linkGood)

  addRoute(door, linkBad)
})
