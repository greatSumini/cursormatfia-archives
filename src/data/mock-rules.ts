import { Rule, RuleCategory } from "../types";

export const mockRules: Rule[] = [
  {
    id: "1",
    title: "Clean Architecture",
    description: "모듈화를 고려한 깔끔한 코드 구조를 위한 규칙",
    prompt: `# Clean Architecture CursorRules

## Core Principles - MANDATORY

### 1. Dependency Rule (CRITICAL)
- **Source code dependencies MUST point inward only**
- Inner layers define interfaces; outer layers implement them
- High-level modules NEVER depend on low-level modules
- Both depend on abstractions, not concretions

### 2. Layer Structure (REQUIRED)
\`\`\`
🎯 Entities (Enterprise Business Rules)
  ↳ 🔄 Use Cases (Application Business Rules)
    ↳ 🔌 Interface Adapters (Controllers, Presenters, Gateways)
      ↳ 🌐 Frameworks & Drivers (UI, DB, External APIs)
\`\`\`

### 3. Independence Requirements
- **Independent of frameworks** - Core logic has no direct framework dependencies
- **Testable** - Business rules testable without UI, DB, or external elements
- **Independent of UI** - Same business logic works with any interface
- **Independent of database** - Business rules don't know about storage mechanisms
- **Independent of external agencies** - Core doesn't know about outside services

## SOLID Principles - ENFORCE ALWAYS

### Single Responsibility (SRP)
- One module = One actor/stakeholder
- Group code by who will request changes
- Avoid accidental duplication across responsibilities

### Open-Closed (OCP)
- Open for extension, closed for modification
- Add new behavior through new code, not changes to existing code
- Use abstractions and polymorphism

### Liskov Substitution (LSP)
- Subtypes must be substitutable for base types
- Derived classes strengthen, never weaken, base class contracts
- Ensure interchangeability without breaking clients

### Interface Segregation (ISP)
- Depend only on what you use
- Split fat interfaces into role-specific ones
- Clients shouldn't depend on unused methods

### Dependency Inversion (DIP)
- High-level modules define interfaces
- Low-level modules implement those interfaces
- Abstractions don't depend on details; details depend on abstractions

## Architectural Guidelines

### Component Design
- **Components are deployment units** (JAR, DLL, microservice)
- Apply cohesion principles: REP, CCP, CRP
- Apply coupling principles: ADP, SDP, SAP
- No cyclic dependencies between components

### Boundary Management
- Draw boundaries to isolate business rules from implementation details
- Use Humble Object pattern for testability
- Separate policy (what) from mechanism (how)
- Delay architectural decisions as long as possible

### Business Rules Protection
- **Core business logic is the most important code**
- Isolate entities and use cases from external concerns
- Make business rules reusable and framework-agnostic
- Business rules should "scream" the domain, not the technology

## Implementation Standards

### File Organization
- Structure reflects business domain, not technical frameworks
- Use cases and entities are clearly visible in package structure
- Group by feature/domain, not by technical layer

### Dependency Management
\`\`\`
❌ WRONG: Core → Framework
✅ CORRECT: Framework → Core (via interfaces)
\`\`\`

### Testing Strategy
- Unit test business rules in isolation
- Use dependency injection for testability
- Mock external dependencies at architectural boundaries
- Tests are part of the system architecture

### Framework Usage
- Keep frameworks at the outermost layer
- Don't let framework annotations pollute core domain
- Treat frameworks as implementation details
- Design for framework replaceability

## Code Quality Rules

### Naming Conventions
- Use domain language, not technical jargon
- Make intent clear from structure and names
- Avoid technical prefixes/suffixes in business code

### Error Handling
- Business rule violations = domain exceptions
- Technical failures = infrastructure exceptions
- Handle errors at appropriate architectural boundaries

### Data Management
- Data model is significant; database is a detail
- Use repository pattern for data access
- Keep persistence concerns out of business logic

## Prohibited Patterns

### ❌ Anti-Patterns to Avoid
- Business logic in controllers or presenters
- Direct database calls from use cases
- Framework dependencies in core domain
- Circular dependencies between layers
- Fat interfaces with unused methods
- Violation of single responsibility

### ❌ Never Do This
- Mix business rules with UI logic
- Couple high-level policy to low-level details
- Make core layers aware of outer layers
- Skip abstraction layers for "performance"
- Let frameworks drive your architecture

## Decision Framework

### When to Create Boundaries
- Cost of implementing boundary < Cost of ignoring it
- Different rates of change
- Different actors/stakeholders
- Different deployment requirements

### When to Delay Decisions
- Database choice
- Framework selection
- UI technology
- External service integrations
- Deployment architecture

## Validation Checklist

Before committing code, verify:
- [ ] Dependencies point inward only
- [ ] Business rules are isolated and testable
- [ ] No framework dependencies in core layers
- [ ] Interfaces defined by inner layers
- [ ] Single responsibility maintained
- [ ] Abstractions don't depend on details
- [ ] Components have clear boundaries
- [ ] Tests can run without external dependencies

## Remember
> "The goal of software architecture is to minimize the human resources required to build and maintain the required system." - Robert C. Martin

**Architecture is about boundaries, dependencies, and keeping options open.**`,
    category: "TypeScript",
    tags: ["typescript", "type-safety", "best-practices"],
    author: "CursorMatfia",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T15:30:00Z",
    likes: 42,
    isPublic: true,
  },
  {
    id: "2",
    title: "React 성능 최적화",
    description: "React 애플리케이션의 성능을 향상시키는 규칙",
    prompt: `React 성능 최적화 전문가로서 다음 규칙을 따르세요:

1. useMemo와 useCallback을 적절히 사용하여 불필요한 재렌더링 방지
2. React.memo를 활용한 컴포넌트 메모이제이션
3. 컴포넌트 분할을 통한 렌더링 최적화
4. lazy loading과 Suspense를 활용한 코드 스플리팅
5. 가상화(virtualization)를 통한 대용량 리스트 최적화

예시:
\`\`\`jsx
const MemoizedComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item));
  }, [data]);

  return <div>{processedData}</div>;
});
\`\`\``,
    category: "React",
    tags: ["react", "performance", "optimization", "memoization"],
    author: "DevExpert",
    createdAt: "2024-01-10T14:20:00Z",
    updatedAt: "2024-01-25T09:45:00Z",
    likes: 38,
    isPublic: true,
  },
  {
    id: "3",
    title: "Next.js SEO 최적화",
    description: "Next.js에서 SEO를 최적화하는 규칙",
    prompt: `Next.js SEO 전문가로서 다음을 구현하세요:

1. 적절한 메타데이터 설정 (title, description, og tags)
2. 구조화된 데이터 (JSON-LD) 추가
3. 시맨틱 HTML 사용
4. 이미지 최적화 및 alt 태그 추가
5. 사이트맵과 robots.txt 설정

메타데이터 예시:
\`\`\`tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for SEO',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};
\`\`\``,
    category: "Next.js",
    tags: ["nextjs", "seo", "metadata", "optimization"],
    author: "SEOGuru",
    createdAt: "2024-01-05T11:15:00Z",
    updatedAt: "2024-01-22T16:20:00Z",
    likes: 56,
    isPublic: true,
  },
  {
    id: "4",
    title: "Tailwind CSS 디자인 시스템",
    description: "Tailwind CSS를 활용한 일관된 디자인 시스템 구축",
    prompt: `Tailwind CSS 디자인 시스템 전문가로서 다음을 구현하세요:

1. 일관된 색상 팔레트 정의
2. 타이포그래피 시스템 구축
3. 스페이싱과 레이아웃 규칙
4. 컴포넌트 변형(variants) 패턴
5. 반응형 디자인 원칙

설정 예시:
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
\`\`\``,
    category: "CSS",
    tags: ["tailwind", "css", "design-system", "ui"],
    author: "DesignPro",
    createdAt: "2024-01-12T13:30:00Z",
    updatedAt: "2024-01-28T10:10:00Z",
    likes: 33,
    isPublic: true,
  },
  {
    id: "5",
    title: "Node.js API 보안",
    description: "Node.js API의 보안을 강화하는 규칙",
    prompt: `Node.js 보안 전문가로서 다음 보안 규칙을 구현하세요:

1. 입력 검증 및 sanitization
2. JWT 토큰 관리 및 보안
3. CORS 설정
4. Rate limiting 구현
5. SQL Injection 방지
6. XSS 공격 방지

보안 미들웨어 예시:
\`\`\`javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// 보안 헤더 설정
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 100, // 최대 100 요청
});
app.use(limiter);
\`\`\``,
    category: "Backend",
    tags: ["nodejs", "security", "api", "authentication"],
    author: "SecurityExpert",
    createdAt: "2024-01-08T09:45:00Z",
    updatedAt: "2024-01-30T14:55:00Z",
    likes: 47,
    isPublic: true,
  },
  {
    id: "6",
    title: "Database 최적화",
    description: "데이터베이스 쿼리 최적화 및 성능 향상 규칙",
    prompt: `데이터베이스 최적화 전문가로서 다음을 구현하세요:

1. 효율적인 인덱스 설계
2. 쿼리 최적화 (N+1 문제 해결)
3. 적절한 정규화 레벨 선택
4. 캐싱 전략 수립
5. 커넥션 풀 관리

PostgreSQL 최적화 예시:
\`\`\`sql
-- 복합 인덱스 생성
CREATE INDEX idx_user_status_created 
ON users(status, created_at) 
WHERE status = 'active';

-- 쿼리 최적화
EXPLAIN ANALYZE 
SELECT u.name, p.title 
FROM users u 
JOIN posts p ON u.id = p.user_id 
WHERE u.status = 'active';
\`\`\``,
    category: "Database",
    tags: ["database", "optimization", "postgresql", "indexing"],
    author: "DBExpert",
    createdAt: "2024-01-03T16:20:00Z",
    updatedAt: "2024-01-26T12:40:00Z",
    likes: 29,
    isPublic: true,
  },
];

export const ruleCategories: RuleCategory[] = [
  {
    name: "TypeScript",
    description: "TypeScript 관련 규칙과 베스트 프랙티스",
    rules: mockRules.filter((rule) => rule.category === "TypeScript"),
  },
  {
    name: "React",
    description: "React 애플리케이션 개발 규칙",
    rules: mockRules.filter((rule) => rule.category === "React"),
  },
  {
    name: "Next.js",
    description: "Next.js 프레임워크 최적화 규칙",
    rules: mockRules.filter((rule) => rule.category === "Next.js"),
  },
  {
    name: "CSS",
    description: "CSS 및 스타일링 관련 규칙",
    rules: mockRules.filter((rule) => rule.category === "CSS"),
  },
  {
    name: "Backend",
    description: "백엔드 개발 및 보안 규칙",
    rules: mockRules.filter((rule) => rule.category === "Backend"),
  },
  {
    name: "Database",
    description: "데이터베이스 설계 및 최적화 규칙",
    rules: mockRules.filter((rule) => rule.category === "Database"),
  },
];
