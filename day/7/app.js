function genRandomColor () {
  var letters = '0123456789ABCDEF'.split('')
  var color = '#'
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const items = document.querySelectorAll('.item')

Array.prototype.forEach.call(items, function (box) {
  box.addEventListener('mouseover', function () {
    this.style.background = genRandomColor()
  })
})
