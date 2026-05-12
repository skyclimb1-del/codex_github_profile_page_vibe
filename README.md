# GitHub Pages 개발자 포트폴리오

정적(static) 파일만으로 동작하는 포트폴리오 사이트입니다. GitHub Pages에 바로 배포할 수 있도록 `site/` 폴더에 웹 파일을 모아두었습니다.

## 빠른 시작

1) `site/index.html`의 텍스트/링크를 본인 정보로 수정  
2) `site/data/projects.json`에 프로젝트 추가/수정  
3) GitHub Pages 배포(아래 참고)

## 로컬에서 미리보기

아래 중 하나를 사용하세요.

### 1) Node.js가 있다면 (추천)

```powershell
npx serve -s site -l 5173
```

브라우저에서 `http://localhost:5173` 접속.

### 2) Python이 있다면

```powershell
python -m http.server 5173 --directory site
```

## GitHub Pages 배포 (GitHub Actions)

이 저장소는 `.github/workflows/pages.yml`로 GitHub Actions 기반 배포를 사용합니다.

1) GitHub repo → **Settings** → **Pages**
2) **Build and deployment** → **Source** 를 **GitHub Actions**로 선택
3) `main` 브랜치에 푸시하면 자동 배포됩니다.

## GitHub에 올리기 (처음 1회)

이미 GitHub에 repo를 만들어뒀다고 가정합니다.

```powershell
git init
git add -A
git commit -m "Init portfolio"
git branch -M main
git remote add origin https://github.com/<OWNER>/<REPO>.git
git push -u origin main
```

## 커스터마이징 포인트

- 프로필/히어로: `site/index.html`
- 프로젝트 목록: `site/data/projects.json`
- 스타일: `site/assets/styles.css`
- 동작(다크모드, 프로젝트 렌더링): `site/assets/main.js`
