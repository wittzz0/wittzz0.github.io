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
        {
          name: "Arthals' ink",
          intro: '所见高山远木，阔云流风；所幸岁月盈余，了无拘束',
          link: 'https://arthals.ink/',
          avatar: 'https://cdn.arthals.ink/Arthals.png'
        },
      ]
    },
    {
      id_name: 'special-links',
      desc: 'Other special links',
      link_list: [
        {
          name: 'Astro',
          intro: 'The web framework for content-driven websites',
          link: 'https://astro.build/',
          avatar: 'https://avatars.githubusercontent.com/u/44914786?s=200&v=4'
        }
      ]
    }
  ]
}
