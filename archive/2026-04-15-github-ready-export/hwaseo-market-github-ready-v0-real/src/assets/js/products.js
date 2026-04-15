// 장바구니 버튼
  document.querySelectorAll('.cart-hover').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.closest('.product-card').querySelector('.product-name').textContent;
      alert(`✅ "${name.trim()}" 상품이 장바구니에 담겼습니다.`);
    });
  });
