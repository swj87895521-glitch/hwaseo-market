# 99_GARBAGE_POLICY

## Garbage 정의

- 더 이상 import되지 않는 home section
- ProductCard 중복 파일
- old-header, new-header-final 같은 임시 파일
- content model과 맞지 않는 임시 데이터
- HTML 내부에 남은 테스트용 하드코딩 블록
- 사용되지 않는 임시 이미지 링크

## 삭제 원칙

- 중복 UI 패턴은 하나만 남긴다
- 장기 미사용 파일은 삭제
- 참고 가치가 있는 실험만 archive 이동

## Archive 규칙

- archive/YYYY-MM-DD-topic 형식
- archive 내부 코드는 실행 import 금지
