const sounds = ['Acertou', 'arquivoConfidencial', 'FilhoDaMae', 'eita', 'olokoMeu', 'Errow', 'meuovo', 'frango' ]

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        pararSons()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
    appendChild(btn)
})

function pararSons() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}