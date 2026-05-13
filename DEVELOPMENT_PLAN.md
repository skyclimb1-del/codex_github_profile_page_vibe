# 개발 계획 (Developer Portfolio on GitHub Pages)

작성일: 2026-05-12 (KST)  
대상 사이트: GitHub Pages 정적 포트폴리오 (`site/`)

---

## 목표

- 채용 담당자가 **30초 내 핵심 역량/대표 프로젝트/연락처**를 파악할 수 있는 포트폴리오 제공
- 프로젝트별로 **문제 → 역할 → 해결 → 성과(지표)**가 명확히 보이도록 구성
- Lighthouse 기준 **성능/접근성/SEO** 최소 기준을 만족
- GitHub Actions로 **자동 배포** 및 유지보수 용이성 확보

---

## 범위 (MVP)

### 필수 섹션

- Hero(한 줄 소개 + 핵심 키워드 + CTA)
- About(일하는 방식/강점)
- Skills(스택/도구)
- Projects(대표 3~6개, 카드형)
- Contact(메일/링크 + 폼 또는 대체 수단)

### 필수 기능

- 다크/라이트 테마 토글 및 저장(localStorage)
- 프로젝트 데이터(`site/data/projects.json`) 기반 렌더링
- 모바일/데스크톱 반응형 레이아웃
- 접근성: 키보드 포커스, 스킵 링크, 색 대비

---

## 마일스톤

### M0. 콘텐츠 확정 (0.5~1일)

- [ ] 본인 정보 확정: 이름/직무/지역/연락처
- [ ] 링크 확정: GitHub, LinkedIn, 블로그/노션(선택)
- [ ] 대표 프로젝트 3~6개 선정
- [ ] 프로젝트별 성과 지표 정리(가능하면 수치화)

### M1. 사이트 커스터마이징 (1~2일)

- [ ] `site/index.html` 내 문구/링크를 본인 정보로 교체
- [ ] `site/data/projects.json`을 실제 프로젝트로 교체
- [ ] 프로젝트 카드에 넣을 정보 정리
  - 제목/기간/한 줄 설명
  - 태그(기술 스택)
  - 링크: Demo/Repo/Case(선택)
- [ ] Contact 폼 사용 여부 결정
  - 폼을 유지하면 Formspree endpoint 세팅
  - 아니면 “메일로 문의” + 템플릿 문구 제공

### M2. 품질 기준 통과 (0.5~1일)

- [ ] 링크 점검(깨진 링크/빈 링크 제거)
- [ ] 이미지/아이콘 최적화(추가 시)
- [ ] Lighthouse 목표(권장)
  - Performance ≥ 90
  - Accessibility ≥ 95
  - Best Practices ≥ 90
  - SEO ≥ 90

### M3. 배포/운영 세팅 (0.5일)

- [ ] GitHub repo Settings → Pages → Source: GitHub Actions 확인
- [ ] Actions에서 `Deploy GitHub Pages` 성공 확인
- [ ] 배포 URL 공유 및 README 정리
- [ ] (선택) 커스텀 도메인 연결 + HTTPS 적용

### M4. 확장(선택, 1~3일+)

- [ ] “경력/경험(Experience)” 섹션 추가
- [ ] “글/발표(Writing/Talks)” 섹션 추가
- [ ] 프로젝트 상세 페이지(케이스 스터디) 추가
  - `site/projects/<slug>/index.html` 형태로 확장
  - 라우팅/링크 일관성 유지
- [ ] 간단한 검색/필터(태그 기반) 추가
- [ ] i18n(ko/en) 지원(채용 타겟에 따라)

---

## 데이터/콘텐츠 스키마(권장)

`site/data/projects.json` 항목별 권장 필드:

- `title`: 프로젝트명
- `period`: 기간(예: `2025.10 – 2026.02`)
- `description`: 한 줄 요약(문제/해결/효과 중심)
- `tags`: 기술 태그 배열(최대 6개 권장)
- `links.demo`: 데모 URL(선택)
- `links.repo`: 저장소 URL(선택)
- `links.caseStudy`: 상세 글/문서 URL(선택)

성과를 수치로 보여주려면(선택):

- `highlights`: 문자열 배열(예: `["LCP 40% 개선", "전환율 12% 증가"]`)

---

## 운영 체크리스트

- [ ] 개인정보 점검(전화번호/주소 등 공개 여부)
- [ ] 외부 링크 `target="_blank"` 사용 시 `rel="noreferrer"` 유지
- [ ] 연락 폼 스팸 대비(Formspree reCAPTCHA/필터 등)
- [ ] 배포 후 실제 모바일에서 레이아웃 확인

---

## 작업 순서(실행 가이드)

1) 콘텐츠 확정(M0)  
2) `site/index.html` / `site/data/projects.json` 커스터마이징(M1)  
3) 품질 점검(M2)  
4) 배포 확인(M3)  
5) 필요 시 확장(M4)

