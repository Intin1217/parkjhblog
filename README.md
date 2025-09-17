# 기술 블로그

Next.js와 TypeScript를 사용하여 제작된 개인 기술 블로그 프로젝트입니다.

## 🚀 주요 기술 스택

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: shadcn/ui
- **State Management**: Redux Toolkit

## 📂 프로젝트 구조

프로젝트의 주요 디렉토리 구조는 다음과 같습니다.

```
parkjhblog/
├── src/
│   ├── app/              # Next.js App Router (글로벌 스타일, 레이아웃, 페이지)
│   │   └── store/        # Redux Toolkit을 사용한 전역 상태 관리
│   ├── assets/           # 폰트, 이미지 등 정적 에셋
│   ├── components/       # 재사용 가능한 컴포넌트
│   │   ├── layout/       # 페이지 구조를 잡는 레이아웃 컴포넌트 (Topbar, Footer)
│   │   ├── providers/    # 앱 전체에 상태/테마를 제공하는 Provider
│   │   └── ui/           # 버튼, 카드 등 기본 UI 컴포넌트 (shadcn/ui 기반)
│   ├── features/         # 특정 기능 또는 페이지 섹션 단위의 컴포넌트
│   ├── types/            # 프로젝트에서 사용되는 타입 정의
│   └── ...
└── ...
```

- **`src/app`**: Next.js 13의 App Router를 기반으로 한 핵심 애플리케이션 폴더입니다. 페이지, 레이아웃 및 전역 상태 관리를 포함합니다.
- **`src/components`**: 여러 곳에서 재사용될 수 있는 공통 컴포넌트들을 관리합니다.
  - **`layout`**: Topbar, Footer 등 전체 페이지 구조에 사용되는 컴포넌트가 위치합니다.
  - **`providers`**: ThemeProvider, StoreProvider 등 앱 전체를 감싸는 Provider들이 위치합니다.
  - **`ui`**: shadcn/ui를 통해 생성된 버튼, 카드 등 원자 단위의 UI 컴포넌트가 위치합니다.
- **`src/features`**: 특정 페이지 섹션(e.g., 최신 포스트 목록)이나 기능적으로 독립적인 컴포넌트들이 위치합니다.
- **`src/types`**: 프로젝트 전반에서 사용되는 TypeScript 타입 정의가 위치합니다.

---