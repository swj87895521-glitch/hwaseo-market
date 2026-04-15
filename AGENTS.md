# AGENTS.md

## 목적

HWASEO MARKET은 전통시장 D2C 몰 프로토타입이다.
이 프로젝트는 점포, 상품, 오프라인 방문 경험을 함께 보여주는 구조를 유지해야 하며, 일반적인 상품-only 쇼핑몰로 회귀하면 안 된다.

## 저장소 개요

- `src/app`: 라우트 진입점
- `src/components`: UI와 페이지 섹션 컴포넌트
- `src/content`: 운영 데이터 원본
- `src/features`: 기능 단위 로직
- `src/lib`: 공통 유틸과 상수
- `src/styles`: 전역 및 페이지 스타일
- `src/types`: 도메인 타입
- `docs`: 프로젝트 규칙과 상세 설계 문서
- `scripts`: 검증 및 점검 스크립트

## 먼저 읽을 문서

1. [`docs/index.md`](./docs/index.md)
2. [`docs/00_PROJECT_RULES.md`](./docs/00_PROJECT_RULES.md)
3. 작업 성격에 따라 아래 문서를 추가로 읽는다.

- 라우트, 내비게이션, 페이지 구조 변경: [`docs/01_INFORMATION_ARCHITECTURE.md`](./docs/01_INFORMATION_ARCHITECTURE.md)
- 홈 섹션 구조 변경: [`docs/02_HOME_SECTION_SPEC.md`](./docs/02_HOME_SECTION_SPEC.md)
- 시각 규칙, 컴포넌트 패턴, 반응형 디자인 변경: [`docs/06_UI_TOKENS.md`](./docs/06_UI_TOKENS.md), [`docs/08_DESIGN_RULES.md`](./docs/08_DESIGN_RULES.md)
- 데이터 필드, 관계, shape 변경: [`docs/03_CONTENT_MODEL.md`](./docs/03_CONTENT_MODEL.md)
- 외부 API 요청/응답 계약 변경: [`docs/07_API_TYPES.md`](./docs/07_API_TYPES.md)
- 레이어 경계, 폴더 책임, 구현 규칙 변경: [`docs/04_ENGINEERING_RULES.md`](./docs/04_ENGINEERING_RULES.md)
- 핸드오프, 작업 범위 조정, 정리 작업: [`docs/05_AGENT_HANDOFF.md`](./docs/05_AGENT_HANDOFF.md), [`docs/99_GARBAGE_POLICY.md`](./docs/99_GARBAGE_POLICY.md)

## 핵심 제품 원칙

- 홈은 이벤트/쿠폰, 지도, 점포+상품 혼합 섹션을 중심으로 구성한다.
- 지도는 장식이 아니라 점포 탐색 도구여야 한다.
- 점포와 상품은 가능한 연결된 데이터로 함께 보여준다.
- 온라인 구매 CTA와 오프라인 방문/쿠폰 CTA를 모두 유지한다.
- 홈 핵심 우선순위는 이벤트/쿠폰, 지도, 점포+상품 혼합, 공지, 신뢰 순서다.

## 기본 작업 원칙

- 구현에 들어가기 전 현재 이해한 범위와 작업 계획을 먼저 정리한다.
- planning 없이 바로 파일 수정이나 구조 변경을 시작하지 않는다.
- 한 번에 한 섹션, 한 라우트, 한 목적 중심으로 수정한다.
- 새 파일을 만들기 전에 기존 컴포넌트와 구조를 먼저 재사용할 수 있는지 확인한다.
- 운영자가 바꿀 수 있어야 하는 데이터는 `src/content`에 둔다.
- 라우트 파일은 얇게 유지하고 재사용 가능한 UI는 `src/components`로 올린다.
- 공통 유틸과 상수는 `src/lib`에 둔다.
- 변경은 작고 명시적이며 되돌리기 쉬운 단위로 유지한다.

## 전역 UX 원칙

- 지도 인터랙션은 핵심 기능으로 취급한다.
- hover, touch, click 환경 차이를 함께 고려한다.
- 모바일에서 hover 전용 UX를 만들지 않는다.

## 금지 사항

- 홈을 상품-only 쇼핑몰 구조로 바꾸지 않는다.
- 명시적 요청 없이 unrelated route를 추가하지 않는다.
- `temp`, `final`, `copy`, `backup`, `new` 같은 임시 성격 파일명을 만들지 않는다.
- 운영 데이터에 해당하는 내용을 컴포넌트 안에 하드코딩하지 않는다.
- 점포 페이지를 시장 구조에서 분리된 독립 미니사이트처럼 확장하지 않는다.
- 요청 없는 대규모 리팩터링을 진행하지 않는다.

## 문서 갱신 규칙

- 라우트, 내비게이션, 섹션 순서가 바뀌면 `docs/01_INFORMATION_ARCHITECTURE.md`를 갱신한다.
- 홈 섹션의 역할이나 필수 요소가 바뀌면 `docs/02_HOME_SECTION_SPEC.md`를 갱신한다.
- 시각 규칙, 컴포넌트 패턴, 반응형 규칙이 바뀌면 `docs/06_UI_TOKENS.md` 또는 `docs/08_DESIGN_RULES.md`를 갱신한다.
- 내부 콘텐츠 필드나 관계가 바뀌면 `docs/03_CONTENT_MODEL.md`를 갱신한다.
- 외부 API 요청/응답 계약이 바뀌면 `docs/07_API_TYPES.md`를 갱신한다.
- 폴더 책임이나 구현 규칙이 바뀌면 `docs/04_ENGINEERING_RULES.md`를 갱신한다.
- 핸드오프 기준이나 작업 경계가 바뀌면 `docs/05_AGENT_HANDOFF.md`를 갱신한다.
- 코드와 문서를 함께 건드렸다면 마무리 전에 둘이 여전히 맞는지 확인한다.

## 검증

수정 후 관련 체크를 실행한다.

- `npm run lint`
- `npm run typecheck`
- `npm run check:forbidden-names`
- `npm run check:home`
- `npm run check:content-shape`

## 사람 판단이 필요한 경우

- 요청이 `docs/00_PROJECT_RULES.md`와 충돌한다.
- 새 라우트, 정보구조 변경, 데이터 모델 변경이 필요한데 요구사항이 명확하지 않다.
- 문서와 코드가 충돌하는데 무엇이 진실 원본인지 확신할 수 없다.
- 대량 삭제, archive 이동, 구조 재편이 필요하다.

## 정리와 보관

- 중복 변형을 남기지 말고 하나의 구조로 정리한다.
- 참고 가치가 있는 실험만 `archive/YYYY-MM-DD-topic`으로 이동한다.
- `archive` 내부 코드는 실행 경로에서 import하지 않는다.

## 문서 역할 분리

- `AGENTS.md`는 상위 운영 원칙과 진입점만 다룬다.
- 세부 설계, 필드 정의, 섹션 요구사항은 `docs/` 문서에서 관리한다.
- 내부 콘텐츠 모델은 `docs/03_CONTENT_MODEL.md`, 외부 API 계약은 `docs/07_API_TYPES.md`, 디자인 규칙은 `docs/06_UI_TOKENS.md`와 `docs/08_DESIGN_RULES.md`에서 관리한다.
- 같은 규칙을 여러 문서에 반복하지 말고, 상위 원칙은 `AGENTS.md`, 세부 계약은 해당 `docs/*.md`에 둔다.
