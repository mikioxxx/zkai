// Keep in-page navigation keyboard accessible after scrolling.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href').slice(1);
    const target = id ? document.getElementById(id) : document.querySelector('.header');
    if (!target) return;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  });
});

const motionToggle = document.querySelector('.motion-toggle');
if (motionToggle) {
  motionToggle.addEventListener('click', () => {
    const paused = document.body.classList.toggle('effects-paused');
    motionToggle.setAttribute('aria-pressed', String(paused));
    motionToggle.textContent = paused ? '光の動きを再開する' : '光の動きを止める';
  });
}
