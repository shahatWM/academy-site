const container = document.querySelector('.hero');

// Anchors (original background-position in %)
const anchors = [
  { baseX: 80, baseY: 20 },
  { baseX: 14, baseY: 84 },
  { baseX: 90, baseY: 85 }
];

// Rectangle movement size
const movementBox = { width: 200, height: 100 }; // ← Updated here

// Store offsets + targets
let icons = anchors.map(anchor => ({
  anchor,
  offsetX: 0,
  offsetY: 0,
  targetX: Math.random() * movementBox.width - movementBox.width / 2,
  targetY: Math.random() * movementBox.height - movementBox.height / 2
}));

function animate() {
  const rect = container.getBoundingClientRect();
  const cw = rect.width;
  const ch = rect.height;

  const easing = 0.02; // slower movement

  const positions = icons.map(icon => {
    // Easing movement
    icon.offsetX += (icon.targetX - icon.offsetX) * easing;
    icon.offsetY += (icon.targetY - icon.offsetY) * easing;

    // Micro jitter
    const jitterX = (Math.random() - 0.5) * 2;
    const jitterY = (Math.random() - 0.5) * 2;

    const finalOffsetX = icon.offsetX + jitterX;
    const finalOffsetY = icon.offsetY + jitterY;

    // Near enough → get new target
    if (
      Math.abs(icon.targetX - icon.offsetX) < 1 &&
      Math.abs(icon.targetY - icon.offsetY) < 1
    ) {
      icon.targetX = Math.random() * movementBox.width - movementBox.width / 2;
      icon.targetY = Math.random() * movementBox.height - movementBox.height / 2;
    }

    // Base anchor in px
    const baseXpx = (icon.anchor.baseX / 100) * cw;
    const baseYpx = (icon.anchor.baseY / 100) * ch;

    const finalXpx = baseXpx + finalOffsetX;
    const finalYpx = baseYpx + finalOffsetY;

    // Convert to background-position %
    const xPercent = (finalXpx / cw) * 100;
    const yPercent = (finalYpx / ch) * 100;

    return `${xPercent.toFixed(2)}% ${yPercent.toFixed(2)}%`;
  });

  container.style.backgroundPosition = positions.join(', ');
  requestAnimationFrame(animate);
}

animate();
