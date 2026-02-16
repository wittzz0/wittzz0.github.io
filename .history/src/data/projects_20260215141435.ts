export type ProjectLinkType = 'github' | 'site' | 'doc' | 'release'

export interface ProjectLink {
  type: ProjectLinkType
  href: string
}

export interface ProjectItem {
  image?: string
  name: string
  description: string
  links: ProjectLink[]
}

export interface ProjectsPageData {
  programs: ProjectItem[]
  oldProjects: ProjectItem[]
  learnings: ProjectItem[]
  others: ProjectItem[]
}

export const projectsPageData: ProjectsPageData = {
  programs: [
    {
      name: '🎨 Astro Theme Pure',
      description: 'A simple, fast and powerful blog & document theme built by Astro',
      links: [
        { type: 'github', href: 'https://github.com/cworld1/astro-theme-pure' },
        { type: 'site', href: 'https://astro-pure.js.org/' },
        { type: 'doc', href: 'https://astro-pure.js.org/docs/list' },
        { type: 'release', href: 'https://www.npmjs.com/package/astro-pure' }
      ]
    },
    {
      name: '💄 PKU Art',
      description: 'A script to beautify pku course website',
      links: [
        { type: 'github', href: 'https://github.com/zhuozhiyongde/pku-art' },
        { type: 'site', href: 'https://github.com/zhuozhiyongde/pku-art' },
        { type: 'doc', href: 'https://docs.arthals.ink/docs/pku-art' }
      ]
    }
  ],
  oldProjects: [
    {
      name: '🧩 rehype-autolink-headings-simple',
      description: 'A simple version of rehype-autolink-headings',
      links: [
        { type: 'github', href: 'https://github.com/cworld1/rehype-autolink-headings-simple' },
        {
          type: 'release',
          href: 'https://www.npmjs.com/package/rehype-autolink-headings-simple'
        }
      ]
    },
    {
      name: 'Gaussian NB',
      description:
        'Simulating the Parsimonious Bayesian Algorithm with Python and Finding the Probability Prediction of Breast Cancer ',
      links: [{ type: 'github', href: 'https://github.com/cworld1/gaussian-nb' }]
    }
  ],
  learnings: [
    {
      name: 'R Learning',
      description: 'Some notes and code about learning R language',
      links: [
        { type: 'github', href: 'https://github.com/cworld1/r-learning' },
        { type: 'site', href: 'https://cworld1.github.io/r-learning' }
      ]
    },
    {
      name: 'CS 213 Learning',
      description: 'Notes, code and experiences for Introduction to Computer Systems course',
      links: [
        {
          type: 'github',
          href: 'https://github.com/zhuozhiyongde/Introduction-To-Computer-System-2023Fall-PKU'
        }
      ]
    }
  ],
  others: [
    {
      name: 'CWorld',
      description: "CWorld's Github",
      links: [{ type: 'github', href: 'https://github.com/cworld1' }]
    },
    {
      name: 'Arthals',
      description: 'Arthals Github',
      links: [{ type: 'github', href: 'https://github.com/zhuozhiyongde' }]
    }
  ]
}
