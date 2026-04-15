# Docs Index

이 폴더는 프로젝트의 세부 계약 문서를 담는다.
상위 운영 원칙은 루트 `AGENTS.md`에서 보고, 여기서는 작업에 필요한 상세 규칙만 읽는다.

## 핵심 문서

### 00_PROJECT_RULES

프로젝트 목적, 제품 목표, 반드시 유지해야 할 구조, 강한 금지 규칙을 담는다.
이 프로젝트가 무엇을 유지해야 하는지 먼저 이해할 때 읽는다.

### 01_INFORMATION_ARCHITECTURE

홈 섹션 구성, 공개 라우트, 내비게이션 우선순위, 최상위 콘텐츠 순서를 정의한다.
라우팅, 내비게이션, 페이지 계층을 바꾸기 전에 읽는다.

### 02_HOME_SECTION_SPEC

홈 각 섹션의 목적, 필수 요소, 제약 조건을 정의한다.
홈 조립 방식이나 섹션 UI를 바꾸기 전에 읽는다.

### 03_CONTENT_MODEL

프론트엔드 내부 콘텐츠 소스의 필드 구조를 정의한다.
내부 운영 데이터 shape를 바꿀 때 읽는다.

### 04_ENGINEERING_RULES

레이어 책임, 홈 규칙, 콘텐츠 분리 규칙, 인터랙션 규칙, 구현 금지 패턴을 담는다.
폴더 경계나 아키텍처 책임을 바꾸기 전에 읽는다.

### 05_AGENT_HANDOFF

핸드오프가 필요한 상황, 작업 묶음 단위, 다음 작업자에게 남겨야 할 맥락을 정리한다.
작업을 넘기거나, 큰 변경을 여러 단계로 나눌 때 읽는다.

### 06_UI_TOKENS

핵심 색상, 시각 톤, 레이아웃 토큰을 담는다.
디자인 토큰이나 기본 시각 시스템을 바꾸기 전에 읽는다.

### 07_API_TYPES

프론트엔드-백엔드 간 외부 API 계약, 공통 응답 타입, 인증 규약, 엔드포인트 계약을 담는다.
요청/응답 shape, 인증 방식, 에러 코드, API 타입을 바꿀 때 읽는다.

### 08_DESIGN_RULES

실제 UI 패턴, 컴포넌트 디자인 규칙, 반응형 규칙, 페이지별 시각 패턴을 담는다.
디자인 패턴이나 화면 구성 규칙을 바꾸기 전에 읽는다.

### 99_GARBAGE_POLICY

가비지 정의, 삭제 원칙, archive 규칙을 담는다.
정리 작업, 파일 변형 제거, archive 이동 전에 읽는다.

## 추천 읽기 경로

### 라우트 또는 내비게이션 변경

1. `AGENTS.md`
2. `00_PROJECT_RULES.md`
3. `01_INFORMATION_ARCHITECTURE.md`
4. `04_ENGINEERING_RULES.md`

### 홈 페이지 변경

1. `AGENTS.md`
2. `00_PROJECT_RULES.md`
3. `01_INFORMATION_ARCHITECTURE.md`
4. `02_HOME_SECTION_SPEC.md`
5. `04_ENGINEERING_RULES.md`
6. `06_UI_TOKENS.md`
7. `08_DESIGN_RULES.md`

### 콘텐츠 또는 스키마 변경

1. `AGENTS.md`
2. `03_CONTENT_MODEL.md`
3. `04_ENGINEERING_RULES.md`

### 외부 API 계약 또는 타입 변경

1. `AGENTS.md`
2. `07_API_TYPES.md`
3. 내부 콘텐츠와 함께 바뀌는 경우 `03_CONTENT_MODEL.md`
4. 구현 규칙 영향이 있으면 `04_ENGINEERING_RULES.md`

### 핸드오프 또는 단계 분리 작업

1. `AGENTS.md`
2. `05_AGENT_HANDOFF.md`

### 정리 작업

1. `AGENTS.md`
2. `05_AGENT_HANDOFF.md`
3. `99_GARBAGE_POLICY.md`
