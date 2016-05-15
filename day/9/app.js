function Game (options) {
  this.options = options || {}
  this.level = this.options.level || 1
  this.speed = this.options.speed || 20
}
Game.prototype.nextLevel = function () {
  this.speed -= 2
  this.level += 1
}
Game.prototype.getLevel = function () {
  return this.level
}
Game.prototype.getSpeed = function () {
  return this.speed
}
Game.prototype.restart = function () {
  this.speed = 20
  this.level = 1
}

function createGame (options) {
  return new Game(options)
}

const ballGame = createGame()

const ball = document.querySelector('.ball')
const messages = document.querySelector('.messages')
const levelText = document.querySelector('.level')
const next = document.querySelector('.next')

ball.addEventListener('click', function () {
  messages.style.display = 'flex'
  levelText.textContent = `Nivel: ${ballGame.getLevel()}`
  next.textContent = 'Continuar'
  this.style.display = 'none'
})

next.addEventListener('click', function () {
  ballGame.nextLevel()
  const level = ballGame.getLevel()

  if (level < 11) {
    let duration = ballGame.getSpeed()
    ball.style.animationDuration = `${duration}s`
    messages.style.display = 'none'
    ball.style.display = 'block'
  } else {
    levelText.textContent = 'Ganaste'
    next.textContent = 'Restaurar'
    ballGame.restart()
  }
})
