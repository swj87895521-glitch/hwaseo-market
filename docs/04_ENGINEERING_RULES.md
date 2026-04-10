# 04_ENGINEERING_RULES

## 1. 레이어 규칙

- app/: route entry only
- components/layout: 상단/하단/네비
- components/home: 홈 전용 섹션
- components/stores: 점포 표시 컴포넌트
- components/products: 상품 표시 컴포넌트
- components/map: 지도 및 마커 관련 컴포넌트
- components/ui: 순수 UI primitive
- content/: 운영 데이터 원본
- features/: 상태 및 상호작용 로직
- lib/: 순수 유틸

## 2. 홈 페이지 규칙

- 홈은 HeroEventBanner / MarketMapSection / StoreAndProductSection 조립 중심으로 구성한다
- 베스트 상품 단독 그리드 메인 구조 금지
- 지도 섹션은 독립 컴포넌트로 관리한다
- 점포와 상품은 가능한 연결된 데이터로 렌더링한다

## 3. 콘텐츠 규칙

- 점포, 상품, 이벤트, 마커 데이터는 content source로 분리한다
- 컴포넌트 내부 하드코딩 금지
- 운영자가 바꿀 데이터는 코드와 분리한다

## 4. 인터랙션 규칙

- 지도 인터랙션은 핵심 기능이다
- hover/touch/click 대응을 고려한다
- 모바일에서 hover 전용 UX 금지

## 5. 금지 규칙

- 상품-only 홈 회귀 금지
- 점포 없이 상품만 반복 출력 금지
- decorative map 금지
- 점포를 독립 미니사이트처럼 과도 확장 금지
