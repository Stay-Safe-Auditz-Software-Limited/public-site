export interface Feature {
  title: string
  description: string
  icon: string
  detail: string
}
export const demoEmail = 'mailto:staysafe@auditz.co.nz?subject=Auditz%20demo%20request'
export const features: Feature[] = [
  {
    title: 'Training registers',
    description: 'Keep your team’s training records organised and easy to find.',
    icon: 'people',
    detail:
      'Bring employee training records into one register, so you can review completed training and plan what comes next.',
  },
  {
    title: 'Equipment & maintenance',
    description: 'Bring equipment details and maintenance records together.',
    icon: 'tool',
    detail:
      'Keep a clear record of your equipment and its maintenance, with information available when you need it.',
  },
  {
    title: 'Document control',
    description: 'Give your health and safety documents a proper home.',
    icon: 'document',
    detail:
      'Organise the policies, procedures and records that support your health and safety processes.',
  },
  {
    title: 'Meetings & minutes',
    description: 'Keep discussions and meeting records out of the paper pile.',
    icon: 'chat',
    detail:
      'Keep health and safety meeting minutes together so your team can refer back to decisions and discussions.',
  },
  {
    title: 'Consistent processes',
    description: 'Formalise the way your business manages health and safety.',
    icon: 'check',
    detail:
      'Move from scattered paperwork to a more organised approach that your team can use day to day.',
  },
  {
    title: 'ISO 45001 preparation',
    description: 'Support your preparation with organised processes and records.',
    icon: 'shield',
    detail:
      'Bring structure to the health and safety processes and records that support your preparation for ISO 45001.',
  },
]
export interface Plan {
  name: string
  staff: string
  monthly: number
  id: string
  description: string
}
export const plans: Plan[] = [
  {
    name: 'Small',
    staff: 'Up to 5 staff',
    monthly: 110,
    id: 'YDC1OkIXOs3AdRmyJakS0w2',
    description: 'A clear start for a small team.',
  },
  {
    name: 'Medium',
    staff: 'Up to 50 staff',
    monthly: 175,
    id: 'OUm9H56RCxt-PO0wf9pq-w2',
    description: 'Room for your growing business.',
  },
  {
    name: 'Large',
    staff: 'Up to 150 staff',
    monthly: 400,
    id: 'qrKWmIrfjmINYa5i3Wy_FQ2',
    description: 'Bring your larger team together.',
  },
]
export const planUrl = (id: string): string => `https://app.auditz.io/Payments/Options?planId=${id}`
