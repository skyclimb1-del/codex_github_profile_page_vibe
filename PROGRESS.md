# 진행 내역 (GitHub Pages 포트폴리오)

작성일: 2026-05-12 (KST)

이 문서는 `codex_github_profile_page_vibe` 포트폴리오 사이트를 GitHub Pages로 배포하기 위해 **지금까지 진행한 작업**을 정리한 것입니다.

---

## 1) 생성된 사이트 구성

정적(Static) 사이트로 구성했으며, 배포 대상은 `site/` 디렉토리입니다.

- 메인 페이지: `site/index.html`
- 스타일: `site/assets/styles.css`
- 동작(JS: 다크모드, 프로젝트 렌더링): `site/assets/main.js`
- 프로젝트 데이터: `site/data/projects.json`
- 404 페이지: `site/404.html`
- Jekyll 비활성화: `site/.nojekyll`
- RSS(기본 틀): `site/rss.xml`
- 파비콘: `site/assets/favicon.svg`

커스터마이징은 주로 아래 파일만 수정하면 됩니다.

- 프로필/문구/링크 수정: `site/index.html`
- 프로젝트 카드 목록 수정: `site/data/projects.json`
- 디자인 수정: `site/assets/styles.css`

---

## 2) GitHub Pages 배포 설정 (GitHub Actions)

GitHub Actions 기반 배포 워크플로를 추가했습니다.

- 워크플로 파일: `.github/workflows/pages.yml`
- 동작: `site/` 폴더를 Pages artifact로 업로드 → GitHub Pages 배포

초기 실행 시 Pages가 repo에서 아직 활성화되지 않아 워크플로가 실패했지만,
이후 **Pages를 활성화(build_type=workflow)** 한 뒤 워크플로를 재실행하여 배포 성공을 확인했습니다.

### 워크플로 실패 원인(초기)

- 원인: repo에서 Pages가 활성화되지 않아 `actions/configure-pages` 단계가 “Not Found”로 실패
- 대응: GitHub Pages를 활성화한 뒤 워크플로 재실행

---

## 3) 로컬 Git 초기화 및 커밋

이 작업 디렉토리에서 Git 저장소를 초기화하고 초기 커밋을 생성했습니다.

기본 브랜치:
- `main`

---

## 4) 원격 저장소 생성 및 push (GitHub CLI)

요청에 따라 GitHub CLI(`gh`)를 사용해 원격 저장소를 생성하고 푸시했습니다.

원격 저장소:
- `skyclimb1-del/codex_github_profile_page_vibe`
- URL: `https://github.com/skyclimb1-del/codex_github_profile_page_vibe`

원격 리모트:
- `origin`이 위 repo를 바라보도록 설정됨
- `main` 브랜치가 `origin/main`을 추적하도록 설정됨

### 인증 처리(보안)

- `gh_token.txt` 파일을 통해 일시적으로 토큰을 전달받아 작업에 사용
- 작업 완료 후 `gh_token.txt`는 **삭제됨**

---

## 5) 배포 상태 및 사이트 링크

GitHub Actions 배포 워크플로:
- 이름: `Deploy GitHub Pages`
- 최종 결과: **success**

GitHub Pages 사이트 주소:
- `https://skyclimb1-del.github.io/codex_github_profile_page_vibe/`

---

## 6) 앞으로 할 일(추천)

- `site/index.html`의 다음 항목을 본인 정보로 교체
  - GitHub/LinkedIn URL의 `USERNAME`
  - 이메일(`you@example.com`)
  - 소개 문구/성과 수치
- `site/data/projects.json`에 실제 프로젝트로 교체
- (선택) 연락 폼:
  - 현재 `Formspree` 예시 URL이 들어있으므로, 실제 Formspree endpoint로 교체
- (선택) 커스텀 도메인 연결:
  - GitHub Pages Settings에서 도메인 설정 + DNS(CNAME/A) 구성

---

## 7) 운영/트러블슈팅 메모

### “Pages가 안 열린다 / 404가 난다”

- repo에서 Pages가 활성화되어 있는지 확인:
  - GitHub repo → **Settings → Pages**
  - **Build and deployment → Source: GitHub Actions**
- Actions 탭에서 `Deploy GitHub Pages`가 성공했는지 확인

### 로컬에서 미리보기

Node.js가 있으면:

```powershell
npx serve -s site -l 5173
```

Python이 있으면:

```powershell
python -m http.server 5173 --directory site
```

