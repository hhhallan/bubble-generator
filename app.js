const body = document.querySelector('body');

window.addEventListener('click', (e) => {
    // Create Bubble
    let bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Generate random color
    let color = colorGenerator();
    bubble.style.backgroundColor = color;
    body.style.backgroundColor = color;

    // Bubble size
    let size = bubbleSize();
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    //Bubble Position
    bubble.style.top = e.y + 'px';
    bubble.style.left = e.x + 'px';


    // Add bubble
    body.append(bubble);

    // Remove bubble
    setTimeout(() => {
        bubble.style.opacity = 0;
        setTimeout(() => {
            bubble.remove();
        }, 1000)
    }, 2000);
});


// Functions
const colorGenerator = () => {
    return '#' + Math.random().toString(16).substr(-6);
}

const bubbleSize = () => {
    return Math.round(Math.random() * (500 - 10) + 10);
}
