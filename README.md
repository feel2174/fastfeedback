## 개발 및 배포 환경

- Vercel
- Next 11.0.0
- react 17.x
- react-hook-form 7.8.6
- Chakra-ui/react 1.6.3

# 0. 프로젝트 구조

---

**Project Name**

- `.husky`
- `./components`
- `./lib`
- `./pages`
- `./public`
- `./styles`

# 1. 프로젝트 기본 구성 폴더

---

## 1. `.husky`

pre-commit을 실행시키는 husky 설정 폴더입니다.
commit 할 경우, yarn lint-staged, yarn build 명령어가 자동실행됩니다.

## 2. `components`

재사용을 고려한 컴포넌트들을 구축해놓은 폴더입니다.

## 3. `lib`

Firebase 와 데이터 교환을 위한 파일입니다.
(Authentication, Firestore)

## 4. `pages`

Next.js에서 라우팅에 사용되는 페이지들 입니다.

## 5. `public`

이미지, favicon 등의 static 파일들이 있습니다.

## 6. `styles`

chakra theme를 활용하여 전역으로 관리하는 theme를 설정하는 파일입니다
