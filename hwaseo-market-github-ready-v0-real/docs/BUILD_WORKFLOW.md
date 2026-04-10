# BUILD WORKFLOW

## 목적
분리된 섹션 파일을 직접 브라우저가 자동 include하지 못하므로,
`template.html + sections/*.html`을 합쳐 `index.html`을 만드는 방식으로 운영합니다.

## 수정 순서
1. `src/sections/*.html` 수정
2. `python scripts/build.py` 실행
3. `src/index.html` 브라우저 확인

## 플레이어 역할
- PM/UI: header, footer, 공통 구조
- 콘텐츠 담당: banner, news
- 데이터/기능 담당: products, admin, js, json
