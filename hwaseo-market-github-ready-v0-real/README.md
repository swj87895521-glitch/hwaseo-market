# HWASEO MARKET GITHUB READY V0

전통시장 자사몰 프로토타입의 협업용 분리 구조입니다.

## 핵심 방식
- `src/sections/*.html`에서 각 섹션을 따로 수정
- `scripts/build.py`가 `src/template.html`과 섹션 파일을 합쳐 `src/index.html` 생성
- 실제 브라우저 미리보기는 `src/index.html`로 확인

## 빌드 방법
```bash
python scripts/build.py
```

## 구조
```text
hwaseo-market-github-ready-v0-real/
├─ src/
│  ├─ index.html (빌드 결과물)
│  ├─ template.html (조립용 템플릿)
│  ├─ sections/
│  ├─ admin/
│  ├─ data/
│  └─ assets/
├─ scripts/
│  └─ build.py (sections → index.html 자동 조립)
├─ docs/
└─ README.md
```

## 작업 규칙
- 화면 구조 수정: `src/sections/*.html`
- 디자인 수정: `src/assets/css/*.css`
- 기능 수정: `src/assets/js/*.js`
- 내용 수정: `src/data/*.json`
- 빌드 후 `src/index.html`로 확인
