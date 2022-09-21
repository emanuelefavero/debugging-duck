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
        'Sill here! With you, again...',
    ]
    duckPhraseOutput.innerHTML =
        phrases[Math.floor(Math.random() * phrases.length)]

    // Track eyes to mouse position
    const duckEyes = document.getElementById('duck-eyes')
    const onMouseMove = (e) => {
        duckEyes.style.left = e.pageX / 40 + 'px'
        duckEyes.style.top = 56 + e.pageY / 30 + 'px'
        console.log(e.pageX)
    }
    document.addEventListener('mousemove', onMouseMove)
})
