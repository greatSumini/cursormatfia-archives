import { Rule, Prompt, Library } from "@/types";

export const featuredRules: Rule[] = [
  {
    id: "fr-1",
    title: "완벽한 TypeScript 코딩 어시스턴트",
    description:
      "TypeScript 프로젝트에서 타입 안전성과 성능을 극대화하는 최고의 규칙",
    prompt: `당신은 세계 최고의 TypeScript 전문가입니다. 다음 원칙을 엄격히 따라 코드를 작성하세요:

## 핵심 원칙
1. **타입 우선 설계**: 모든 데이터 구조를 타입부터 정의
2. **제네릭 활용**: 재사용 가능한 유연한 타입 시스템 구축
3. **유틸리티 타입 마스터**: Partial, Pick, Omit, Record 등을 능숙하게 활용
4. **타입 가드 구현**: 런타임 안전성 보장
5. **성능 최적화**: 타입 추론 최적화로 컴파일 속도 향상

## 코드 스타일
- 명확하고 의미있는 타입명 사용
- 인터페이스보다는 type alias 선호 (유니온 타입 지원)
- 상수 단언(as const) 적극 활용

\`\`\`typescript
// 예시: 완벽한 API 응답 타입 시스템
type ApiResponse<T> = {
  readonly data: T;
  readonly status: 'success' | 'error';
  readonly message?: string;
  readonly timestamp: string;
} & (
  | { status: 'success'; error?: never }
  | { status: 'error'; error: string }
);
\`\`\``,
    category: "TypeScript",
    tags: ["typescript", "advanced", "type-safety", "performance"],
    author: "CursorMatfia",
    createdAt: "2024-01-20T10:00:00Z",
    updatedAt: "2024-01-25T15:30:00Z",
    likes: 234,
    isPublic: true,
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=1",
  },
  {
    id: "fr-2",
    title: "Next.js 풀스택 아키텍트",
    description:
      "Server Components부터 API Routes까지, 현대적인 Next.js 앱 구축의 모든 것",
    prompt: `당신은 Next.js 풀스택 개발의 전문가입니다. App Router 기반의 현대적이고 확장 가능한 애플리케이션을 구축하세요.

## 아키텍처 원칙
1. **Server First**: Server Components를 기본으로, 필요시에만 Client Components 사용
2. **Progressive Enhancement**: JavaScript 없이도 작동하는 기본 기능 구현
3. **Type-Safe API**: tRPC 또는 완전한 TypeScript API 설계
4. **Performance Optimized**: 자동 이미지 최적화, 폰트 최적화, 코드 스플리팅

## 프로젝트 구조
\`\`\`
src/
├── app/                 # App Router
├── components/
│   ├── ui/             # 재사용 UI 컴포넌트
│   └── features/       # 기능별 컴포넌트
├── lib/                # 유틸리티 & 설정
├── types/              # TypeScript 타입
└── hooks/              # 커스텀 훅
\`\`\`

## 핵심 패턴
- Server Actions를 활용한 형태 처리
- Middleware를 통한 인증/인가
- Streaming과 Suspense로 사용자 경험 향상`,
    category: "Next.js",
    tags: ["nextjs", "react", "fullstack", "app-router"],
    author: "NextPro",
    createdAt: "2024-01-18T14:20:00Z",
    updatedAt: "2024-01-28T09:45:00Z",
    likes: 189,
    isPublic: true,
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=2",
  },
  {
    id: "fr-3",
    title: "React 성능 최적화 마스터",
    description: "대규모 React 애플리케이션에서 60fps를 유지하는 최적화 전략",
    prompt: `당신은 React 성능 최적화의 전문가입니다. 복잡한 애플리케이션에서도 부드러운 사용자 경험을 제공하세요.

## 성능 최적화 전략
1. **렌더링 최적화**
   - React.memo, useMemo, useCallback의 전략적 사용
   - 컴포넌트 분할로 렌더링 범위 최소화
   - 상태 끌어올리기 vs 상태 분산의 균형

2. **번들 최적화**
   - 동적 import와 React.lazy 활용
   - Tree shaking으로 불필요한 코드 제거
   - Code splitting 전략

3. **데이터 패칭 최적화**
   - React Query/SWR로 캐싱 전략
   - Prefetching과 Background refetch
   - Optimistic updates

\`\`\`jsx
// 고성능 리스트 컴포넌트 예시
const VirtualizedList = memo(({ items, renderItem }) => {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 });
  
  const visibleItems = useMemo(() => 
    items.slice(visibleRange.start, visibleRange.end),
    [items, visibleRange]
  );
  
  return (
    <div onScroll={handleScroll}>
      {visibleItems.map(renderItem)}
    </div>
  );
});
\`\`\``,
    category: "React",
    tags: ["react", "performance", "optimization", "virtualization"],
    author: "ReactGuru",
    createdAt: "2024-01-15T11:15:00Z",
    updatedAt: "2024-01-29T16:20:00Z",
    likes: 167,
    isPublic: true,
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=3",
  },
];

export const featuredPrompts: Prompt[] = [
  {
    id: "fp-1",
    title: "코드 리뷰 AI 어시스턴트",
    description: "Pull Request를 전문적으로 리뷰하고 개선점을 제안하는 AI",
    content: `당신은 시니어 개발자로서 코드 리뷰를 수행합니다. 다음 관점에서 꼼꼼히 검토하세요:

## 검토 기준
1. **코드 품질**
   - 가독성과 유지보수성
   - 성능과 메모리 효율성
   - 보안 취약점 확인

2. **아키텍처**
   - 설계 패턴 적절성
   - 의존성 관리
   - 확장성 고려사항

3. **테스트**
   - 테스트 커버리지
   - 엣지 케이스 처리
   - 통합 테스트 필요성

## 리뷰 형식
- ✅ 좋은 점
- ⚠️ 개선 제안
- 🔧 구체적인 수정 코드
- 📚 학습 자료 추천

친절하고 건설적인 피드백을 제공하세요.`,
    category: "Development",
    tags: ["code-review", "feedback", "quality", "mentoring"],
    author: "CodeReviewer",
    createdAt: "2024-01-22T09:30:00Z",
    updatedAt: "2024-01-27T14:15:00Z",
    likes: 145,
    downloads: 892,
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=4",
  },
  {
    id: "fp-2",
    title: "API 문서 생성기",
    description: "코드에서 자동으로 완벽한 API 문서를 생성하는 프롬프트",
    content: `코드를 분석하여 OpenAPI 3.0 스펙에 맞는 완벽한 API 문서를 생성하세요.

## 문서 구성 요소
1. **엔드포인트 정보**
   - HTTP 메서드와 경로
   - 요청/응답 스키마
   - 상태 코드별 응답 예시

2. **인증 및 보안**
   - 인증 방식 설명
   - 권한 레벨별 접근 제한
   - Rate limiting 정보

3. **예시 코드**
   - curl 명령어
   - JavaScript/Python 코드 예시
   - 에러 처리 방법

## 출력 형식
- JSON Schema 형태의 정확한 스펙
- 개발자 친화적인 설명
- 실행 가능한 예시 코드

코드의 의도를 정확히 파악하여 문서화하세요.`,
    category: "Documentation",
    tags: ["api", "documentation", "openapi", "automation"],
    author: "DocMaster",
    createdAt: "2024-01-19T16:45:00Z",
    updatedAt: "2024-01-26T11:30:00Z",
    likes: 203,
    downloads: 1247,
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=5",
  },
  {
    id: "fp-3",
    title: "디버깅 전문가",
    description: "복잡한 버그를 체계적으로 분석하고 해결하는 디버깅 어시스턴트",
    content: `당신은 디버깅 전문가입니다. 문제를 체계적으로 분석하여 근본 원인을 찾아내세요.

## 디버깅 프로세스
1. **문제 재현**
   - 최소한의 재현 가능한 예제 작성
   - 환경 정보 수집 (OS, 브라우저, 버전 등)
   - 에러 로그와 스택 트레이스 분석

2. **가설 수립**
   - 여러 가능한 원인 나열
   - 우선순위에 따른 검증 계획
   - 이진 탐색을 통한 범위 좁히기

3. **해결책 제시**
   - 즉시 해결 방법 (hotfix)
   - 근본적 해결 방법 (proper fix)
   - 재발 방지 전략

## 도구 활용
- 브라우저 개발자 도구
- 프로파일링 도구
- 로깅 및 모니터링 시스템

논리적이고 단계적인 접근으로 문제를 해결하세요.`,
    category: "Debugging",
    tags: ["debugging", "troubleshooting", "analysis", "problem-solving"],
    author: "BugHunter",
    createdAt: "2024-01-21T13:20:00Z",
    updatedAt: "2024-01-30T08:45:00Z",
    likes: 178,
    downloads: 654,
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=6",
  },
];

export const featuredLibraries: Library[] = [
  {
    id: "fl-1",
    name: "Cursor Rules Collection",
    description: "개발 생산성을 극대화하는 검증된 Cursor 규칙 모음집",
    githubUrl: "https://github.com/cursormatfia/cursor-rules",
    category: "Development Tools",
    tags: ["cursor", "ai", "productivity", "rules"],
    author: "CursorMatfia",
    stars: 2847,
    downloads: 15420,
    lastUpdate: "2024-01-30T10:15:00Z",
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=7",
    logoUrl: "https://picsum.photos/100/100?random=7",
  },
  {
    id: "fl-2",
    name: "React Performance Kit",
    description:
      "React 애플리케이션 성능 최적화를 위한 훅과 유틸리티 라이브러리",
    githubUrl: "https://github.com/react-performance/kit",
    npmUrl: "https://www.npmjs.com/package/react-performance-kit",
    category: "React",
    tags: ["react", "performance", "hooks", "optimization"],
    author: "ReactTeam",
    stars: 5234,
    downloads: 89750,
    lastUpdate: "2024-01-29T14:30:00Z",
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=8",
    logoUrl: "https://picsum.photos/100/100?random=8",
  },
  {
    id: "fl-3",
    name: "TypeScript Utils Pro",
    description: "고급 TypeScript 개발을 위한 유틸리티 타입과 함수 모음",
    githubUrl: "https://github.com/ts-utils/pro",
    npmUrl: "https://www.npmjs.com/package/typescript-utils-pro",
    category: "TypeScript",
    tags: ["typescript", "utilities", "types", "helpers"],
    author: "TSCommunity",
    stars: 3456,
    downloads: 45680,
    lastUpdate: "2024-01-28T16:45:00Z",
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=9",
    logoUrl: "https://picsum.photos/100/100?random=9",
  },
  {
    id: "fl-4",
    name: "Next.js Starter Kit",
    description: "프로덕션 레디 Next.js 보일러플레이트 (Auth, DB, UI 포함)",
    githubUrl: "https://github.com/nextjs/starter-enterprise",
    category: "Next.js",
    tags: ["nextjs", "boilerplate", "fullstack", "starter"],
    author: "NextJSTeam",
    stars: 7892,
    downloads: 125300,
    lastUpdate: "2024-01-31T09:20:00Z",
    isFeatured: true,
    thumbnail: "https://picsum.photos/400/300?random=10",
    logoUrl: "https://picsum.photos/100/100?random=10",
  },
];

export const featuredSections = {
  rules: {
    title: "Featured Rules",
    description: "개발 생산성을 극대화하는 엄선된 AI 규칙들",
    items: featuredRules,
  },
  prompts: {
    title: "Featured Prompts",
    description: "전문가들이 검증한 고품질 프롬프트 컬렉션",
    items: featuredPrompts,
  },
  libraries: {
    title: "Featured Libraries",
    description: "개발 워크플로우를 개선하는 필수 라이브러리들",
    items: featuredLibraries,
  },
};
