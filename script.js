document.addEventListener('DOMContentLoaded', () => {
  const revealButton = document.getElementById('reveal-button');
  const letter = document.getElementById('letter');
  const heartsContainer = document.getElementById('hearts-container');

  // Function to create falling hearts
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Random fall duration
    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  revealButton.addEventListener('click', () => {
  letter.style.display = 'block';
  revealButton.style.display = 'none';
  
  // Scroll to the top of the letter
  window.scrollTo({
    top: letter.offsetTop - 20,
    behavior: 'smooth'
  });

  // Start falling hearts with mobile detection
  const isMobile = window.innerWidth <= 428;
  setInterval(createHeart, isMobile ? 300 : 200);
});
});
