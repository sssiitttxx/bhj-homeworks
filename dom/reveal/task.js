function isInViewport(e) {
  const rect = e.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom < 0
  );
}
function handleScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(reveal => {
    if(isInViewport(reveal)) {
      reveal.classList.add('reveal_active');
    }
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll(); 