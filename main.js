const img = document.getElementById('video-img')
const crossBtn = document.getElementById('cross-btn')
const video = document.getElementById('video')

img.addEventListener('click', () => {
    video.classList.add('active')
})

crossBtn.addEventListener('click', () => {
    video.classList.remove('active')
})