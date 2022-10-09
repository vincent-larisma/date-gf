const clickRandomMovement = document.querySelector('.click-random-movement')

clickRandomMovement.addEventListener('click', () => {
  clickRandomMovement.style.position = 'absolute'
  clickRandomMovement.style.top = `${Math.random() * 99}%`
  clickRandomMovement.style.left = `${Math.random() * 99}%`
})
