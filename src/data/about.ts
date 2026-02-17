export interface AboutHeading {
  depth: 2
  slug: string
  text: string
}

export interface AboutIntro {
  role: string
  paragraphs: string[]
  sponsorButton: {
    title: string
    href: string
    variant: 'ahead'
  }
}

export interface AboutSocialStat {
  platform: string
  icon: 'github' | 'telegram' | 'steam'
  color?: string
  link: string
}

export interface AboutSocial {
  title: string
  description: string
  stats: AboutSocialStat[]
}

export interface AboutPageData {
  headings: AboutHeading[]
  intro: AboutIntro
  social: AboutSocial
}

export const aboutPageData: AboutPageData = {
  headings: [{ depth: 2, slug: 'social-networks', text: 'Social Networks' }],
  intro: {
    role: '学生',
    paragraphs: [
      '目前是BUAA计算与智能专业本科生。'
    ],
    sponsorButton: {
      title: 'Sponsor Me',
      href: '/projects#sponsorship',
      variant: 'ahead'
    }
  },
  social: {
    title: 'Social Networks',
    description:
      '',
    stats: [
      {
        platform: 'GitHub',
        icon: 'github',
        link: 'https://github.com/wittzz-crypto'
      }
    ]
  }
}
