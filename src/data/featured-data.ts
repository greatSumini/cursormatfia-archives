import { Rule, Prompt, Library } from "@/types";

export const featuredRules: Rule[] = [
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
];

export const featuredPrompts: Prompt[] = [];

export const featuredLibraries: Library[] = [];

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
