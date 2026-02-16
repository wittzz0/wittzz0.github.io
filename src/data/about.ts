export interface AboutHeading {
  depth: 2
  slug: string
  text: string
}

export interface AboutIntro {
  role: string
  paragraphs: string[]
  mottoLabel: string
  mottoPrefix: string
  mottoSpoiler: string
  sponsorButton: {
    title: string
    href: string
    variant: 'ahead'
  }
}

export interface AboutHobbies {
  title: string
  items: string[]
}

export interface AboutSocialStat {
  platform: string
  icon: 'github' | 'telegram' | 'steam'
  color?: string
  link: string
  text: string
  api: string
}

export interface AboutSocial {
  title: string
  description: string
  stats: AboutSocialStat[]
}

export interface AboutPageData {
  headings: AboutHeading[]
  intro: AboutIntro
  hobbies: AboutHobbies
  social: AboutSocial
}

export const aboutPageData: AboutPageData = {
  headings: [
    { depth: 2, slug: 'hobbies', text: 'Hobbies' },
    { depth: 2, slug: 'social-networks', text: 'Social Networks' }
  ],
  intro: {
    role: 'Developer / Designer',
    paragraphs: [
      'Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio possit voluptatum.'
    ],
    mottoLabel: 'Motto',
    mottoPrefix: 'Stay hungry, Stay foolish.',
    mottoSpoiler: '这里可以夹私货，比如为什么要演奏春日影！',
    sponsorButton: {
      title: 'Sponsor Me',
      href: '/projects#sponsorship',
      variant: 'ahead'
    }
  },
  hobbies: {
    title: 'Hobbies',
    items: [
      'Lorem ipsum dolor sit amet, vidit suscipit at mei.',
      'Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne.',
      'Ex dicat impedit mel, at eum oratio possit voluptatum.',
      'Impetus fuisset ullamcorper pri cu, his posse iisque ad, aliquam honestatis usu id.'
    ]
  },
  social: {
    title: 'Social Networks',
    description:
      'Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne.',
    stats: [
      {
        platform: 'GitHub',
        icon: 'github',
        link: 'https://github.com/cworld1',
        text: 'followers',
        api: 'github/cworld1'
      },
      {
        platform: 'Telegram',
        icon: 'telegram',
        color: '#2ca5e0',
        link: 'https://t.me/cworld0_cn',
        text: 'subscribers',
        api: 'telegram/cworld0_cn'
      },
      {
        platform: 'Steam',
        icon: 'steam',
        color: '#50769d',
        link: 'https://steamcommunity.com/id/cworld',
        text: 'games',
        api: 'steamgames/76561199021278120'
      }
    ]
  }
}
