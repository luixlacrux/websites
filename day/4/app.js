const colors = document.querySelectorAll('button')
const cells = document.querySelectorAll('.item > .cell')

let colorCurrent = '#FEFEFE'

Array.prototype.forEach.call(colors, function (color) {
  color.addEventListener('click', function () {
    colorCurrent = this.style.background
  })
})

Array.prototype.forEach.call(cells, function (cell) {
  cell.addEventListener('click', function () {
    this.style.background = colorCurrent
  })
})
