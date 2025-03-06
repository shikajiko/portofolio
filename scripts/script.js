const frames = document.querySelectorAll(".frame");
frames.forEach((frame, i) => {
  frame.style.animationDelay = `${i * 0.1}s`;
});