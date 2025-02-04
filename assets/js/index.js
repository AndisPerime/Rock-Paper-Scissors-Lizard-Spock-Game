document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const images = ['bang_stone.png', 'bang_paper.png', 'bang_scissors.png', 'bang_lizard.png', 'bang_spock.png'];
    const imageElements = [];

    images.forEach((image) => {
        const img = document.createElement('img');
        img.src = `assets/images/${image}`;
        img.classList.add('background-image');
        body.appendChild(img);
        imageElements.push(img);
    });
    images.line_linked = {
        enable: true,
        distance: 150,
        color: "#ffffff", // White links between images
        opacity: 1,
        width: 1
    }
    function moveImages() {
        const footer = document.querySelector('footer');
        const footerRect = footer.getBoundingClientRect();
        const maxY = footerRect.top - 10; // 10px padding above the footer

        imageElements.forEach((img) => {
            const imgWidth = img.width;
            const imgHeight = img.height;
            const startX = Math.random() * (window.innerWidth - imgWidth);
            const startY = Math.random() * (maxY - imgHeight);
            const endX = Math.random() * (window.innerWidth - imgWidth);
            const endY = Math.random() * (maxY - imgHeight);

            img.style.transform = `translate(${startX}px, ${startY}px)`;
            setTimeout(() => {
                img.style.transition = 'transform 3s ease-in-out';
                img.style.transform = `translate(${endX}px, ${endY}px)`;
            }, 0);
        });
    }

    setInterval(moveImages, 3000);
});