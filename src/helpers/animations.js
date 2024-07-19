export const createMouseTrail = () => {
    let lastX, lastY;

    document.addEventListener('mousemove', function(e) {
      if (typeof lastX === 'undefined' || typeof lastY === 'undefined') {
        lastX = e.pageX;
        lastY = e.pageY;
        return;
      }

      const trail = document.createElement('div');
      trail.classList.add('trail');
      document.body.appendChild(trail);

      const deltaX = e.pageX - lastX;
      const deltaY = e.pageY - lastY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      trail.style.width = `${distance}px`;
      trail.style.left = `${lastX}px`;
      trail.style.top = `${lastY}px`;
      trail.style.transform = `rotate(${angle}deg)`;

      setTimeout(() => {
        trail.style.opacity = '0';
      }, 0);

      setTimeout(() => {
        trail.remove();
      }, 500);  // Match the duration of the CSS transition

      lastX = e.pageX;
      lastY = e.pageY;
    });
};

export const createGalaxyBackground = () => {
    const background = document.querySelector('.background');
    const numberOfDots = 5000; // Number of dots to appear at once
    const intervalTime = 500; // Time between creating new dots in milliseconds

    function createDot() {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.top = `${Math.random() * 100}vh`;
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.width = `${Math.random() * 15 + 5}px`;
        dot.style.height = dot.style.width; // Keep the dots circular

        // Randomize the animation duration for each dot
        dot.style.animationDuration = `${Math.random() * 2 + 1}s`;
        dot.style.animationDelay = `${Math.random() * 5}s`;

        background.appendChild(dot);

        // Remove the dot after its animation
        setTimeout(() => {
            dot.remove();
        }, 7000); // Adjust this time to be longer than the animation duration
    }

    // Create dots at intervals
    setInterval(createDot, intervalTime);

    // Optional: Limit the number of dots on screen to avoid performance issues
    setInterval(() => {
        const dots = document.querySelectorAll('.dot');
        if (dots.length > numberOfDots) {
            dots[0].remove(); // Remove the oldest dot if there are too many
        }
    }, 1); // Check every second
};