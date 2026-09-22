export interface HelpArticle {
  title: string
  path: string
  slug: string
  category: 'Getting started' | 'Folder types'
  videoUrl: string | null
}

// Original public help-centre URLs and Vimeo access hashes are intentionally preserved.
export const helpArticles: HelpArticle[] = [
  {
    title: 'Software Overview',
    path: '/software-overview.html',
    slug: 'software-overview',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691186342?h=23b9c218ed',
  },
  {
    title: 'Adding Folders',
    path: '/adding-folders.html',
    slug: 'adding-folders',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691186283?h=598e92948a',
  },
  {
    title: 'Adding Items',
    path: '/adding-items.html',
    slug: 'adding-items',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691186234?h=adab5c4a66',
  },
  {
    title: 'Setting Alerts',
    path: '/setting-alerts.html',
    slug: 'setting-alerts',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691186174?h=a7bba25262',
  },
  {
    title: 'Completing Actions',
    path: '/completing-actions.html',
    slug: 'completing-actions',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691186146?h=8bec1a523a',
  },
  {
    title: 'Adding Notes',
    path: '/adding-notes.html',
    slug: 'adding-notes',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691186101?h=5a3d8175df',
  },
  {
    title: 'Changing the Status of an Item',
    path: '/changing-the-status-of-an-item.html',
    slug: 'changing-the-status-of-an-item',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691186055?h=59ab678edc',
  },
  {
    title: 'Users',
    path: '/users.html',
    slug: 'users',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691186017?h=5c6fe41a2b',
  },
  {
    title: 'App Download',
    path: '/app-download.html',
    slug: 'app-download',
    category: 'Getting started',
    videoUrl: null,
  },
  {
    title: 'Demonstration',
    path: '/demonstration.html',
    slug: 'demonstration',
    category: 'Getting started',
    videoUrl: 'https://player.vimeo.com/video/691185959?h=45cc4c0f33',
  },
  {
    title: 'Adding Documents',
    path: '/adding-documents.html',
    slug: 'adding-documents',
    category: 'Folder types',
    videoUrl: 'https://player.vimeo.com/video/691185916?h=b863f138a5',
  },
  {
    title: 'Adding Employees',
    path: '/adding-employees.html',
    slug: 'adding-employees',
    category: 'Folder types',
    videoUrl: 'https://player.vimeo.com/video/691185881?h=ac6f44916b',
  },
  {
    title: 'Adding Equipment',
    path: '/adding-equipment.html',
    slug: 'adding-equipment',
    category: 'Folder types',
    videoUrl: 'https://player.vimeo.com/video/691185846?h=0a2831e054',
  },
  {
    title: 'Adding Company Records',
    path: '/adding-company-records.html',
    slug: 'adding-company-records',
    category: 'Folder types',
    videoUrl: 'https://player.vimeo.com/video/691185818?h=0451308553',
  },
  {
    title: 'Holding Meetings',
    path: '/holding-meetings.html',
    slug: 'holding-meetings',
    category: 'Folder types',
    videoUrl: 'https://player.vimeo.com/video/691185788?h=dd4b983fd5',
  },
  {
    title: 'Adding Hazards & Risks',
    path: '/adding-hazards--risks.html',
    slug: 'adding-hazards--risks',
    category: 'Folder types',
    videoUrl: 'https://player.vimeo.com/video/691185752?h=525d69f714',
  },
  {
    title: 'Adding Jobs & Tasks',
    path: '/adding-jobs--tasks.html',
    slug: 'adding-jobs--tasks',
    category: 'Folder types',
    videoUrl: 'https://player.vimeo.com/video/691185724?h=e3ff09a4be',
  },
  {
    title: 'Occurrence Reporting',
    path: '/occurrence-reporting.html',
    slug: 'occurrence-reporting',
    category: 'Folder types',
    videoUrl: 'https://player.vimeo.com/video/691185664?h=2770107281',
  },
]

export const helpCategories = ['Getting started', 'Folder types'] as const
export const appDownloads = {
  android: 'https://play.google.com/store/apps/details?id=co.peaksoft.auditz',
  apple: 'https://apps.apple.com/nz/app/auditz/id1534964805',
}
