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

## 2. 작업 시작 규칙

- 구현 전에 먼저 현재 이해한 요구사항, 범위, 제외 범위, 검증 계획을 짧게 정리한다
- planning은 가능하면 섹션 단위, 라우트 단위, 데이터 단위로 나눠 제시한다
- 사용자가 planning을 요청한 경우 계획 확인 전에는 구현을 시작하지 않는다
- planning 단계에서 백엔드, API 계약, 라우트 추가 여부처럼 영향 범위가 큰 변경을 먼저 명시한다

## 3. 홈 페이지 구현 규칙

- 홈 핵심 구조와 우선순위는 `AGENTS.md`, `00_PROJECT_RULES.md`, `01_INFORMATION_ARCHITECTURE.md`를 기준으로 유지한다
- 홈 섹션은 독립 컴포넌트로 관리한다
- 점포와 상품을 연결하는 구현은 분리된 데이터 소스를 조합해도 되지만, 렌더링 결과는 하나의 시장 경험으로 보여야 한다

## 4. 콘텐츠 규칙

- 점포, 상품, 이벤트, 마커 데이터는 content source로 분리한다
- 컴포넌트 내부 하드코딩 금지
- 운영자가 바꿀 데이터는 코드와 분리한다

## 5. 인터랙션 구현 규칙

- 지도 인터랙션 상세 동작은 컴포넌트와 기능 로직에서 일관되게 관리한다
- 입력 방식별 대응은 구현에서 누락되지 않도록 점검한다

## 6. 검증 루틴

- 구조 또는 콘텐츠를 건드리면 `npm run verify`를 우선 실행한다
- 문서 또는 라우트를 건드리면 `npm run check:docs`로 문서-구현 불일치를 먼저 점검한다
- 홈 섹션 순서를 바꾸면 `npm run check:home`으로 IA 문서와 홈 조립 순서를 확인한다
- 콘텐츠 관계를 바꾸면 `npm run check:content-shape`로 점포, 상품, 배너, 지도 데이터 연결을 확인한다
- 새 top-level 문서를 추가하기 전에 기존 `docs/*.md`에 흡수할 수 있는지 먼저 검토한다

## 7. 금지 규칙

- 상품-only 홈 회귀 금지
- 점포 없이 상품만 반복 출력 금지
- decorative map 금지
- 점포를 독립 미니사이트처럼 과도 확장 금지