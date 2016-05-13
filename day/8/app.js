const lamp = document.getElementById('lamp')

let countProportion = 0

lamp.addEventListener('click', function () {
  this.style.color = '#EEFF41'
  this.style.boxShadow = `0px 0px 30px ${countProportion}px`
  countProportion += 15
})
