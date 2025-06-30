onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function createParticle() {
  const particles = document.querySelector('.particles');
  const particle = document.createElement('div');
  
  // Random particle type
  const types = ['particle-1', 'particle-2', 'particle-3'];
  const type = types[Math.floor(Math.random() * types.length)];
  
  particle.className = `particle ${type}`;
  
  // Random horizontal position
  particle.style.left = Math.random() * 100 + '%';
  
  // Random animation delay
  particle.style.animationDelay = Math.random() * 3 + 's';
  
  particles.appendChild(particle);
  
  // Remove particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 12000);
}

// Create particles continuously
function startParticles() {
  setInterval(createParticle, 300);
}

// Start when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Remove not-loaded class to start animations
  document.body.classList.remove('not-loaded');
  
  // Start particle system after a short delay
  setTimeout(startParticles, 1000);
});
