const clickRandomMovement = document.querySelector('.click-random-movement')
let move = 90
let secondMove = 90

const randomNumber = () => {
  return Math.ceil(Math.random() * 2)
}

clickRandomMovement.addEventListener('click', () => {
  clickRandomMovement.style.position = 'absolute'
  let randomMove = () => {
    if (move == 90) {
      move = 0
      secondMove = 90
    } else {
      move = 90
      secondMove = 0
    }
  }

  randomMove()
  clickRandomMovement.style.left = `${randomNumber() == 1 ? move : secondMove}%`
  clickRandomMovement.style.top = `${randomNumber() == 2 ? move : secondMove}%`
})
