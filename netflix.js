// trending slider controls
document.addEventListener('DOMContentLoaded', () => {
  const left = document.querySelector('.slider-nav.left');
  const right = document.querySelector('.slider-nav.right');
  const slider = document.getElementById('trendingSlider');

  if (left && right && slider) {
    const step = Math.round(slider.clientWidth * 0.7);

    left.addEventListener('click', () => slider.scrollBy({left: -step, behavior: 'smooth'}));
    right.addEventListener('click', () => slider.scrollBy({left: step, behavior: 'smooth'}));
  }

  // FAQ expand/collapse
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('open');
      // rotate icon for clarity
      const icon = btn.querySelector('.faq-icon');
      if(icon) icon.textContent = item.classList.contains('open') ? '×' : '+';
    });
  });

  // keyboard arrow support for slider (optional)
  const s = document.getElementById('trendingSlider');
  if (s) {
    s.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') s.scrollBy({left: 250, behavior:'smooth'});
      if (e.key === 'ArrowLeft') s.scrollBy({left: -250, behavior:'smooth'});
    });
  }
});
