# 컬러풀한 관리자 대시보드

현대적이고 시각적으로 매력적인 웹 기반 관리 인터페이스입니다. 다양한 데이터 시각화 차트, 반응형 레이아웃, 그리고 직관적인 사용자 경험을 제공합니다.

## 🎨 주요 특징

- **현대적인 UI**: shadcn-ui 컴포넌트와 Tailwind CSS 기반
- **데이터 시각화**: antv-chart를 활용한 다양한 차트
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **컬러풀한 디자인**: 생동감 있는 그라디언트와 색상 팔레트
- **TypeScript**: 완전한 타입 안전성

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI 라이브러리**: shadcn-ui, Tailwind CSS
- **차트**: antv-chart (AntV G2Plot)
- **상태 관리**: React Hooks
- **개발 도구**: ESLint, Prettier

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
├── components/          # React 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   ├── ui/             # shadcn-ui 컴포넌트
│   ├── charts/         # 차트 컴포넌트
│   ├── kpi/            # KPI 카드 컴포넌트
│   └── table/          # 테이블 컴포넌트
├── lib/                # 유틸리티 함수
├── types/              # TypeScript 타입 정의
└── data/               # 샘플 데이터
```

## 🎯 주요 컴포넌트

### KPI 카드

- 주요 지표를 시각적으로 표시
- 변화율 및 트렌드 표시
- 컬러풀한 그라디언트 배경

### 차트 섹션

- 라인 차트: 매출 트렌드
- 바 차트: 카테고리별 판매량
- 도넛 차트: 트래픽 소스
- 에어리어 차트: 사용자 활동

### 데이터 테이블

- 정렬 및 검색 기능
- 페이지네이션
- 행 선택 및 액션

### 사이드바 네비게이션

- 반응형 사이드바
- 모바일 햄버거 메뉴
- 활성 상태 표시

## 🎨 색상 팔레트

- **Primary Blue**: #3b82f6 → #1d4ed8
- **Success Green**: #10b981 → #059669
- **Accent Purple**: #8b5cf6 → #7c3aed
- **Warning Orange**: #f59e0b → #d97706

## 📱 반응형 디자인

- **데스크톱**: 멀티 컬럼 레이아웃
- **태블릿**: 2컬럼 레이아웃
- **모바일**: 단일 컬럼 레이아웃

## 🔧 개발 가이드

### 새 컴포넌트 추가

```bash
# shadcn-ui 컴포넌트 추가
npx shadcn@latest add [component-name]
```

### 커스텀 색상 사용

```tsx
// Tailwind CSS 클래스
className="bg-gradient-to-r from-blue-500 to-blue-600"

// CSS 변수 사용
style={{ background: 'var(--gradient-blue)' }}
```

## 📊 MCP 서버 통합

이 프로젝트는 다음 MCP 서버들을 활용합니다:

1. **shadcn-ui MCP**: UI 컴포넌트 생성
2. **antv-chart MCP**: 차트 JSON 설정 생성
3. **clear-thought MCP**: 통합 및 최적화

## 🚀 배포

### Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### GitHub Pages 배포

```bash
# 빌드
npm run build

# 정적 파일 내보내기
npm run export
```

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 생성해 주세요.
