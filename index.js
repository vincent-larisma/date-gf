const clickRandomMovement = document.querySelector('.click-random-movement')
const randomMove = () => {
  return Math.random() * 99
}

clickRandomMovement.addEventListener('click', () => {
  clickRandomMovement.style.position = 'absolute'
  clickRandomMovement.style.left = `${randomMove()}%`
  clickRandomMovement.style.top = `${randomMove()}%`
})
