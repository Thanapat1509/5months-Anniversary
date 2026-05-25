// ── STARS ──
const starEl = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 2.5 + 0.5;
  s.style.cssText = `
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    width: ${size}px;
    height: ${size}px;
    --d: ${(Math.random() * 3 + 1.5).toFixed(1)}s;
    animation-delay: ${(Math.random() * 4).toFixed(1)}s;
  `;
  starEl.appendChild(s);
}
 
// ── FALLING PETALS ──
const petalEl = document.getElementById('petals');
const petalSyms = ['🌸', '🌺', '🌷', '💮'];
for (let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = petalSyms[Math.floor(Math.random() * petalSyms.length)];
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    font-size: ${Math.random() * 12 + 12}px;
    animation-duration: ${(Math.random() * 8 + 8).toFixed(1)}s;
    animation-delay: ${(Math.random() * 10).toFixed(1)}s;
  `;
  petalEl.appendChild(p);
}
 
// ── POPUP ──
function openPopup() {
  document.getElementById('overlay').classList.add('active');
  const popup = document.getElementById('popup');
  popup.style.animation = 'none';
  void popup.offsetWidth; // force reflow to restart animation
  popup.style.animation = '';
}
 
function closePopup() {
  document.getElementById('overlay').classList.remove('active');
}
 
function handleOverlayClick(e) {
  if (e.target === document.getElementById('overlay')) closePopup();
}
 
// ── CONFETTI BURST ──
function burst() {
  const colors = ['#f7c5d8', '#e8789a', '#c94f78', '#ffd6e7', '#fff0f5', '#ffb3cc'];
  for (let i = 0; i < 50; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    const angle = Math.random() * 360;
    const dist = Math.random() * 300 + 80;
    const tx = Math.cos(angle * Math.PI / 180) * dist;
    const ty = Math.sin(angle * Math.PI / 180) * dist - 100;
    c.style.cssText = `
      left: ${Math.random() * 80 + 10}%;
      top: ${Math.random() * 80 + 10}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --tx: ${tx}px;
      --ty: ${ty}px;
      animation-delay: ${(Math.random() * 0.4).toFixed(2)}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      width: ${Math.random() * 8 + 5}px;
      height: ${Math.random() * 8 + 5}px;
    `;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2200);
  }
}