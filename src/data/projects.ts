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
  learnings: ProjectItem[]
  others: ProjectItem[]
}

export const projectsPageData: ProjectsPageData = {
  programs: [
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
  learnings: [
    {
      name: 'CS 213 Learning',
      description: 'Notes, code and experiences for Introduction to Computer Systems course',
      links: [
        { type: 'github', href: 'https://github.com/zhuozhiyongde/Introduction-To-Computer-System-2023Fall-PKU' }
      ]
    }
  ],
  others: [
  ]
}
