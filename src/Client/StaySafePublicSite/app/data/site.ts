export interface Solution {
  title: string
  description: string
  outcome: string
}

export const solutions: Solution[] = [
  {
    title: 'Bring safety work into one clear system',
    description:
      'A simple home for the processes, records, and actions your team needs to keep safety moving.',
    outcome: 'Less searching. Clearer ownership.',
  },
  {
    title: 'Make good practice easier to repeat',
    description:
      'Give every site and team a consistent way to spot risks, complete work, and follow up on what matters.',
    outcome: 'Confidence across every shift.',
  },
  {
    title: 'Turn safety activity into useful insight',
    description:
      'See the patterns behind completed work and open actions, so leaders can focus conversations where they help most.',
    outcome: 'Better decisions, earlier.',
  },
]

export const implementationSteps = [
  'Understand your people, work, and safety priorities.',
  'Shape a practical rollout that fits the way your teams operate.',
  'Support adoption with clear guidance and a useful next step.',
]
