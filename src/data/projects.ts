import type { ImageMetadata } from 'astro'
import wechatQRCode from '@/assets/wechat-qrcode.jpg'

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

export type SponsorshipActionIcon = 'receive-money' | 'wechat-pay'

interface SponsorshipActionBase {
  key: string
  label: string
  icon: SponsorshipActionIcon
}

export interface SponsorshipLinkAction extends SponsorshipActionBase {
  type: 'link'
  href: string
  target?: '_blank' | '_self'
}

export interface SponsorshipQrcodeAction extends SponsorshipActionBase {
  type: 'hover-qrcode'
  qrImage: ImageMetadata
  qrAlt?: string
}

export type SponsorshipAction = SponsorshipLinkAction | SponsorshipQrcodeAction

export interface SponsorshipSection {
  title: string
  actions: SponsorshipAction[]
  contact: SponsorshipContact
  thanks: SponsorThanksSection
}

export interface SponsorshipContact {
  introText: string
  email: string
  suffixText?: string
}

export interface SponsorThanksItem {
  name: string
  amount: number
  date: string
}

export interface SponsorThanksSection {
  title: string
  progressMax?: number
  items: SponsorThanksItem[]
}

export interface ProjectsPageData {
  programs: ProjectItem[]
  learnings: ProjectItem[]
  others: ProjectItem[]
  sponsorship: SponsorshipSection
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
  others: [],
  sponsorship: {
    title: 'Sponsorship',
    actions: [
      {
        key: 'buy-me-a-coffee',
        label: 'Buy Me a Coffee',
        icon: 'receive-money',
        type: 'link',
        href: 'https://ko-fi.com/cworld0',
        target: '_blank'
      },
      {
        key: 'wechat-pay',
        label: 'WeChat',
        icon: 'wechat-pay',
        type: 'hover-qrcode',
        qrImage: wechatQRCode,
        qrAlt: 'WeChat Pay QR Code'
      }
    ],
    contact: {
      introText: 'Please contact me proactively after sponsorship. My email is',
      email: 'cworld0@qq.com',
      suffixText: '.'
    },
    thanks: {
      title: 'Thanks to the following sponsors:',
      progressMax: 50,
      items: [
        { name: 'Juyao Huang', amount: 5, date: '2026-01-15' },
        { name: 'hoochanlon', amount: 5, date: '2025-11-09' },
        { name: 'Arthals', amount: 50, date: '2025-11-06' },
        { name: '边缘星2020 (byx2020.com)', amount: 50, date: '2025-11-01' },
        { name: '小哲', amount: 50, date: '2025-08-19' },
        { name: 'Open1V', amount: 2, date: '2025-08-14' },
        { name: 'Luis Xu', amount: 30, date: '2025-08-03' },
        { name: '顾**', amount: 28, date: '2025-06-23' },
        { name: 'Hans J.Han', amount: 10, date: '2025-04-04' },
        { name: '**青', amount: 12, date: '2024-05-21' },
        { name: 'Anonymous', amount: 20, date: '2022-04-06' },
        { name: '华雄', amount: 5, date: '2019-12-30' },
        { name: '◌', amount: 3, date: '2019-12-30' },
        { name: 'C*a', amount: 2, date: '2019-07-02' }
      ]
    }
  }
}
