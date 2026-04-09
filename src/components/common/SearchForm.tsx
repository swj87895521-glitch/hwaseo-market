export function SearchForm() {
  return (
    <form className="search-form" action="#">
      <input type="text" placeholder="신선한 우리 시장 상품을 검색해보세요!" />
      <button type="submit" aria-label="검색">⌕</button>
    </form>
  );
}
