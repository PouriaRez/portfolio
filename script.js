const techStackContainer = document.querySelector('.tech-stack-container');
const techStackTrack = document.querySelector('.tech-stack-track');


document.addEventListener('DOMContentLoaded', () => {
    techStackTrack.innerHTML += techStackTrack.innerHTML; // this duplicates content.
    techStackTrack.innerHTML += techStackTrack.innerHTML; // this duplicates content.
    techStackTrack.innerHTML += techStackTrack.innerHTML; // this duplicates content.
} )

techStackContainer.addEventListener('mouseenter', () => {
    techStackTrack.classList.add('paused-track');
});

techStackContainer.addEventListener('mouseleave', () => {
    techStackTrack.classList.remove('paused-track');
});
