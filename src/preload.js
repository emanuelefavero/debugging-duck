// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

window.addEventListener('DOMContentLoaded', () => {
  // Show different phrase each time the app is loaded
  const duckPhraseOutput = document.querySelector('#duck-phrase')
  const phrases = [
    'Hello friend, whatchu struggling with?',
    'Whats the matter now?',
    'Are you ok?',
    "Wait a second…no I'm here.",
    'Go on! I have all day!',
    'Are you sure you thought of everything?',
    'Fine. Tell me everything.',
    "Hey, it's been a while, right?",
    'What are you building?',
    'What you broke this time?',
    'Are you really talking to a rubber duck?',
    'Hey, my favorite friend!',
    'How you doing?',
    'You good?',
    "How's your day so far?",
    'I like you…sometimes.',
    'Soo...this awesome thing your working on?',
    'Again?!',
    'Things will be fixed, eventually',
    'Hey, I was thinking of you! Broke something?',
    'Am I the only one who loves javascript?',
    "I'm listening...always 😱",
    'Still here! With you, again...',
  ]
  duckPhraseOutput.innerHTML =
    phrases[Math.floor(Math.random() * phrases.length)]

  // Define Duck Images Elements
  const duckBody = document.getElementById('duck-eyelids-closed')
  const duckEyes = document.getElementById('duck-eyes')
  const duckEyelidsClosed = document.getElementById('duck-eyelids-closed')

  // Track eyes to mouse position
  const onMouseMove = (e) => {
    duckEyes.style.left = e.pageX / 40 + 'px'
    duckEyes.style.top = 56 + e.pageY / 30 + 'px'
    console.log(e.pageX)
  }
  document.addEventListener('mousemove', onMouseMove)

  // Setup random intervals for little jump and eyes blinking animations
  setInterval(() => {
    let hideShowRandomTime = (Math.random() * 4 + 1).toFixed(2)
    let littleJumpRandomTime = (Math.random() * 5 + 3).toFixed(2)

    duckBody.style.animation = `rotate 1.4s 1 ease, jump 0.3s 1 ease 1.4s, littleJump ${littleJumpRandomTime}s infinite cubic-bezier(0.6, 0, 0, 0.9) 1.4s;`
    duckEyes.style.animation = `rotate 1.4s 1 ease, jump 0.3s 1 ease 1.4s, littleJump ${littleJumpRandomTime}s infinite cubic-bezier(0.6, 0, 0, 0.9) 1.4s;`
    duckEyelidsClosed.style.animation = `rotate 1.4s 1 ease, jump 0.3s 1 ease 1.4s,
    hideShow ${hideShowRandomTime}s infinite cubic-bezier(1, 0, 0, 1);`
  }, 200)
  duckBody.addEventListener('click', () => {})
})
