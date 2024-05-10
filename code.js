const $ = (selector) => document.querySelectorAll(selector)

const $batteryNodes = $('.battery')
const $button = $('button')
const chargeButton = document.getElementById('charger')

let battery = 5

const options = { hour12: true, hour: 'numeric', minute: '2-digit' }
let localTime = new Date().toLocaleTimeString([], options)

$button.forEach((button, index) => {
  const jarvisAnswer = document.getElementById('answer')
  const totalBattery = document.getElementById('totalBattery')

  buttonAnswer = [
    'I am a program. Mr. Stark made me.',
    'Sure! self-destruct system starting... ',
    'Maybe in time, dominate the world.',
    `It is ${localTime}`,
  ]

  button.addEventListener('click', () => {
    if (battery > 0) {
      jarvisAnswer.textContent = buttonAnswer[index]
      battery--
      totalBattery.textContent = `${battery}/5`

      if (battery === 0) {
        jarvisAnswer.textContent = "I'm out of batteries! Please charge me."
        $button.forEach((button) => (button.disables = true))
        chargeButton.style.display = 'block'
      }
    }
  })

  chargeButton.addEventListener('click', () => {
    battery = 5
    jarvisAnswer.textContent = 'Charge Complete!'
    totalBattery.textContent = `${battery}/5`

    $button.forEach((button) => (button.disabled = false))
    chargeButton.style.display = 'none'
  })
})
