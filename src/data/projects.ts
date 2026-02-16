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
    /*{
      name: '💄 PKU Art',
      description: 'A script to beautify pku course website',
      links: [
        { type: 'github', href: 'https://github.com/zhuozhiyongde/pku-art' },
        { type: 'site', href: 'https://github.com/zhuozhiyongde/pku-art' },
        { type: 'doc', href: 'https://docs.arthals.ink/docs/pku-art' }
      ]
    }*/
  ],
  learnings: [
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
        href: '',
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
      email: 'witt498063@gmail.com',
      suffixText: '.'
    },
    thanks: {
      title: 'There\'s no sponsors yet',
      progressMax: 50,
      items: [
        
      ]
    }
  }
}
