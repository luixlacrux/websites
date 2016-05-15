const rolls = document.querySelectorAll('.roll')
const animations = ['rotate', 'zoom', 'skew']

function getRandomAnimation () {
  let index = Math.round(Math.random() * (animations.length -1))
  console.log(animations[index])
  return animations[index]
}

Array.prototype.forEach.call(rolls, function (roll) {
  roll.addEventListener('click', function () {
    this.style.animationName = getRandomAnimation()
  })
})
