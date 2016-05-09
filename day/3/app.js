function genRandomColor () {
  var letters = '0123456789ABCDEF'.split('')
  var color = '#'
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const buttonChange = document.getElementById('button')
buttonChange.style.background = genRandomColor()

buttonChange.addEventListener('click', function () {
  document.body.style.background = this.style.background
  this.style.background = genRandomColor()
})
