# 박주호 기술 블로그

Next.js와 TypeScript를 기반으로 구축된 개인 블로그~

## 🛠️ 기술 스택 (Tech Stack)

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: Shadcn/UI
- **State Management**: Redux Toolkit
- **Theming**: next-themes
- **Icons**: Lucide React, Simple Icons
- **Linting & Formatting**: ESLint, Prettier

## 📂 폴더 구조 (Folder Structure)

```
/src
├── app/              
├── assets/           # 이미지, SVG 등 정적 에셋
├── components/       # 공통 UI 컴포넌트
│   ├── layout/       # Topbar, Footer 등 레이아웃 컴포넌트
│   ├── providers/    # ThemeProvider, StoreProvider 등 전역 Provider
│   └── ui/           # Shadcn UI 컴포넌트
├── features/         # 페이지를 구성하는 기능 단위 컴포넌트 (e.g., 최신 포스트, 기술 스택)
├── fonts/            # 로컬 폰트 파일
├── lib/              # 공통 유틸리티 함수
├── store/            # Redux Toolkit 스토어 및 슬라이스
└── types/            # 전역적으로 사용되는 TypeScript 타입 정의
```