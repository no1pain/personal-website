export interface CaseStudy {
  title: string
  challenge: string
  constraints: string[]
  solution: string
  tradeoffs: string[]
  outcome: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Real-time Features',
    challenge:
      'Several products required live data synchronization while working with different data models and user flows.',

    constraints: [
      'Different products had different data structures',
      'Network connections could be unreliable',
      'Features needed to remain simple to maintain',
    ],

    solution:
      'Implemented real-time updates using Supabase Realtime together with reusable React hooks for subscriptions and state synchronization.',

    tradeoffs: [
      'Real-time communication increased application complexity',
      'Subscription lifecycle required careful management',
    ],

    outcome:
      'Implemented live data synchronization across multiple products using reusable frontend patterns.',
  },

  {
    title: 'Authentication',
    challenge:
      'Applications required secure authentication while supporting different product requirements.',

    constraints: [
      'Different authentication requirements across projects',
      'Reliable session management was essential',
      'Protected routes needed a consistent implementation',
    ],

    solution:
      'Implemented authentication using Supabase Auth, JWT-based sessions, protected routes, and reusable authentication patterns.',

    tradeoffs: [
      'Supabase Auth limited some customization options',
      'Authentication flows required careful session handling',
    ],

    outcome:
      'Delivered consistent authentication patterns that were reused across multiple applications.',
  },

  {
    title: 'PostgreSQL & Data Layer',
    challenge:
      'Applications required secure data access while keeping database structures organized and maintainable.',

    constraints: [
      'Different products had different data requirements',
      'Performance and maintainability were important',
      'Access control had to be implemented securely',
    ],

    solution:
      'Worked with PostgreSQL databases, implemented Row-Level Security (RLS), and optimized queries where needed.',

    tradeoffs: [
      'RLS policies required careful testing',
      'Query optimization involved balancing readability and performance',
    ],

    outcome:
      'Delivered database improvements that supported application requirements while maintaining security and performance.',
  },
]