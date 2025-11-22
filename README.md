# 만송시스템(주) 스마트 팩토리 솔루션 웹사이트

만송시스템의 공장 모니터링 시스템과 스마트 팩토리 솔루션을 소개하는 B2B 웹사이트입니다.

## 기술 스택

- **Next.js 15** (App Router)
- **Tailwind CSS** (다크모드 지원)
- **Framer Motion** (애니메이션)
- **EmailJS** (문의 폼)
- **next-intl** (다국어 지원: 한국어, 영어, 일본어, 중국어)
- **Recharts** (데이터 시각화)
- **Lucide React** (아이콘)
- **TypeScript**

## 지원 언어

- 🇰🇷 한국어 (ko)
- 🇺🇸 English (en)
- 🇯🇵 日本語 (ja)
- 🇨🇳 中文 (zh)

## 시작하기

개발 서버 실행:

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 배포

Vercel에 쉽게 배포할 수 있습니다:

1. [Vercel](https://vercel.com)에 가입
2. 프로젝트를 Vercel에 연결
3. 자동 배포

## EmailJS 설정

문의 폼 작동을 위해 EmailJS 계정 설정 필요:

1. [EmailJS](https://www.emailjs.com/)에 가입
2. 서비스, 템플릿 생성
3. `app/page.tsx`의 `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`를 실제 값으로 교체

## 최적화

- 로딩 속도 95점 목표 (Next.js 자동 최적화)
- SEO 최적화 (meta 태그, OG 이미지)
- 모바일 반응형 디자인
- 다크모드 자동 지원
