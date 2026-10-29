// Edite aqui: fases, semanas e tópicos. Prefixos: "LC:" = LeetCode, "EN:" = Inglês.
window.ROADMAP = {
  title: "Roadmap Java Backend",
  weeks: 24,
  objective:
    "Construir uma base sólida em Engenharia de Software com foco em Java Backend: fundamentos, estruturas de dados, bancos, testes, arquitetura e sistemas distribuídos, com inglês em paralelo.",
  phases: [
    {
      name: "Fundamentos",
      weeks: [
        { title: "Como computadores executam programas", topics: ["CPU", "RAM", "Código fonte e bytecode", "Compilação vs interpretação", "Stack", "Heap", "LC: Two Sum", "EN: Ler 1 artigo técnico/dia (10 min)"] },
        { title: "Sistema operacional, processos e memória", topics: ["Processo", "Thread", "Context switch", "Memória virtual", "I/O", "LC: Valid Anagram", "EN: Shadowing de 1 vídeo técnico"] },
        { title: "Big O e estruturas básicas", topics: ["Notação Big O", "Arrays", "Linked list", "Hash map", "Stack e Queue", "LC: Valid Parentheses", "LC: Contains Duplicate", "EN: Explicar Big O em voz alta (inglês)"] },
        { title: "Git, terminal, HTTP e redes", topics: ["Git: branch, rebase, PR", "Terminal Linux", "HTTP, verbos e status", "DNS e TCP", "LC: Best Time to Buy and Sell Stock", "EN: Escrever README em inglês"] }
      ]
    },
    {
      name: "Java",
      weeks: [
        { title: "Sintaxe e orientação a objetos", topics: ["Tipos e controle de fluxo", "Classes e interfaces", "Herança vs composição", "Records e enums", "LC: Reverse Linked List", "EN: Vocabulário OOP (Anki)"] },
        { title: "Collections, generics e igualdade", topics: ["List, Set, Map", "Generics", "equals e hashCode", "Comparable e Comparator", "LC: Group Anagrams", "EN: Explicar HashMap em inglês"] },
        { title: "Streams, lambdas e exceções", topics: ["Lambdas", "Streams API", "Optional", "Checked vs unchecked", "LC: Top K Frequent Elements", "EN: Code review comments em inglês"] },
        { title: "Concorrência, build e JVM", topics: ["Threads e ExecutorService", "synchronized, volatile", "CompletableFuture", "Maven e Gradle", "JVM e Garbage Collector", "LC: Merge Intervals", "EN: Podcast técnico (1/semana)"] }
      ]
    },
    {
      name: "Backend e Bancos de Dados",
      weeks: [
        { title: "API REST com Spring Boot", topics: ["Controller, Service, Repository", "Injeção de dependência", "DTOs e validação", "Tratamento de erros", "LC: Binary Search", "EN: Documentar API em inglês (OpenAPI)"] },
        { title: "SQL e PostgreSQL", topics: ["SELECT, JOIN, GROUP BY", "Índices", "EXPLAIN", "Transações e ACID", "LC: SQL 50 (Easy)", "EN: Descrever uma query em inglês"] },
        { title: "JPA, Hibernate e migrations", topics: ["Entidades e relacionamentos", "Problema N+1", "Lazy vs eager", "Flyway", "LC: Linked List Cycle", "EN: Escrever commit messages em inglês"] },
        { title: "Segurança, Docker e deploy", topics: ["Autenticação JWT", "Spring Security", "OWASP Top 10", "Dockerfile e Compose", "LC: Product of Array Except Self", "EN: Mini apresentação (3 min) do projeto"] }
      ]
    },
    {
      name: "Testes e Qualidade de Código",
      weeks: [
        { title: "Testes unitários", topics: ["JUnit 5", "Mockito", "AAA e naming", "TDD básico", "LC: Min Stack", "EN: Vocabulário de testes"] },
        { title: "Testes de integração", topics: ["Spring Boot Test", "Testcontainers", "Testes de contrato", "Pirâmide de testes", "LC: Longest Substring Without Repeating", "EN: Relatar um bug em inglês"] },
        { title: "Clean Code, SOLID e refatoração", topics: ["Nomes e funções pequenas", "SOLID", "Code smells", "Refatoração segura", "LC: 3Sum", "EN: Ler 'Clean Code' (trechos)"] },
        { title: "CI/CD e observabilidade", topics: ["GitHub Actions", "Logs estruturados", "Métricas e tracing", "SonarQube / Checkstyle", "LC: Container With Most Water", "EN: Escrever post-mortem curto"] }
      ]
    },
    {
      name: "Arquitetura e Sistemas Distribuídos",
      weeks: [
        { title: "Padrões e arquitetura de software", topics: ["Design patterns essenciais", "Arquitetura em camadas", "Hexagonal / Clean Architecture", "C4 Model", "LC: Number of Islands", "EN: Explicar uma arquitetura em inglês"] },
        { title: "Mensageria e eventos", topics: ["Filas vs tópicos", "Kafka: conceitos", "RabbitMQ", "At-least-once e idempotência", "LC: Course Schedule", "EN: Ler docs do Kafka"] },
        { title: "Fundamentos de sistemas distribuídos", topics: ["Teorema CAP", "Consistência eventual", "Cache com Redis", "Rate limiting", "Retries e circuit breaker", "LC: LRU Cache", "EN: Assistir 1 talk de arquitetura (com legenda EN)"] },
        { title: "System Design básico", topics: ["Requisitos e estimativas", "Load balancer e escalabilidade", "Sharding e replicação", "Projetar um encurtador de URL", "LC: Design Twitter", "EN: Fazer system design falando em inglês"] }
      ]
    },
    {
      name: "Projeto, Entrevistas e Carreira",
      weeks: [
        { title: "Árvores e grafos", topics: ["BFS e DFS", "Binary tree", "Trie", "Heap", "LC: Validate BST", "LC: Binary Tree Level Order Traversal", "EN: Mock coding interview em inglês"] },
        { title: "Programação dinâmica e backtracking", topics: ["Recursão", "Backtracking", "DP 1D", "Entrevista comportamental (STAR)", "LC: Climbing Stairs", "LC: Coin Change", "EN: Responder 'Tell me about yourself'"] },
        { title: "Projeto capstone", topics: ["API completa com testes", "Dockerizada e com CI", "Diagrama C4 no README", "Deploy online", "LC: Revisar problemas errados", "EN: README e demo em inglês"] },
        { title: "Mock interviews e candidaturas", topics: ["Currículo e LinkedIn em inglês", "2 mock interviews", "Candidaturas a vagas júnior", "Revisão geral no Notion", "LC: Simulado 90 min", "EN: Entrevista simulada completa em inglês"] }
      ]
    }
  ]
};
