# 05_AGENT_HANDOFF

## 기본 원칙

- 한 번에 하나의 섹션 또는 하나의 목적만 수정한다
- 새 파일 생성 전 기존 컴포넌트 재사용 가능성 먼저 확인
- content shape 변경 시 CONTENT_MODEL 문서 먼저 갱신
- 홈 구조 변경 시 HOME_SECTION_SPEC 문서 먼저 확인

## 허용 작업 예시

- HeroSlider를 컴포넌트로 분리
- ProductCard 공통화
- NoticeSection를 데이터 기반 렌더링 구조로 변경
- TrustSection 스타일 정리

## 금지 작업

- unrelated route 추가
- 요청 없는 대규모 리팩터링
- 실험용 임시 컴포넌트 본 구조 삽입
- temp/final/copy 파일 생성
