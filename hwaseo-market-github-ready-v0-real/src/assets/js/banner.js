// ── 배너 슬라이더
  let current = 0;
  const slides = document.getElementById('slides');
  const dots   = document.querySelectorAll('.slider-dot');
  const total  = 3;

  function goSlide(n) {
    current = (n + total) % total;
    slides.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  function moveSlide(dir) { goSlide(current + dir); }

  // 자동 슬라이드 (5초)
  setInterval(() => moveSlide(1), 5000);
