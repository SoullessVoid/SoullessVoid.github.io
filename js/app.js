// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
    top: 1000, // could be negative value
    left: 0,
    behavior: 'smooth'
});

// Scroll to a certain element

function scrollLearn() {
    document.querySelector('#learn').scrollIntoView({
        behavior: 'smooth'
    });
}
function scrollCmds() {
    document.querySelector('#cmds').scrollIntoView({
        behavior: 'smooth'
    });
}
