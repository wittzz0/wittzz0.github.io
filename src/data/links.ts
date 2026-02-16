export interface AvatarCache {
  hash: string
  path: string
}

export interface FriendLinkItem {
  name: string
  intro: string
  link: string
  avatar: string
  avatar_cache?: AvatarCache
}

export interface FriendGroup {
  id_name: string
  desc: string
  link_list: FriendLinkItem[]
}

export interface LinksData {
  friends: FriendGroup[]
}

// Source of truth for links page data. `public/links.json` is generated for compatibility.
export const linksData: LinksData = {
  friends: [
    {
      id_name: 'cf-links',
      desc: 'Common links included in circle friends',
      link_list: [
      ]
    },
    {
      id_name: 'special-links',
      desc: 'Other special links',
      link_list: [
        
      ]
    }
  ]
}
