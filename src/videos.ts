export type Video = {
  title: string
  channel: string
  views: string
  publishedAt: string
  thumbnail: string
  icon: string
}

import thumbnail1 from './assets/images/thumbnails/1.webp'
import thumbnail2 from './assets/images/thumbnails/2.webp'
import thumbnail3 from './assets/images/thumbnails/3.webp'
import thumbnail4 from './assets/images/thumbnails/4.webp'
import thumbnail5 from './assets/images/thumbnails/5.webp'
import thumbnail6 from './assets/images/thumbnails/6.webp'
import icon1 from './assets/images/icons/1.jpg'
import icon2 from './assets/images/icons/2.jpg'
import icon3 from './assets/images/icons/3.jpg'
import icon4 from './assets/images/icons/4.jpg'
import icon5 from './assets/images/icons/5.jpg'
import icon6 from './assets/images/icons/6.jpg'

export const videos: Video[] = [
  {
    title: 'Why did my side-hustle fail? How to validate business ideas',
    channel: 'Fireship',
    views: '388K',
    publishedAt: '3 weeks ago',
    thumbnail: thumbnail1,
    icon: icon1,
  },
  {
    title: 'Buying in game gold - Gold Farmer',
    channel: 'Viva La Dirt League',
    views: '2.3M',
    publishedAt: '1 year ago',
    thumbnail: thumbnail2,
    icon: icon2,
  },
  {
    title: 'Most overpowered way to build mobile apps?',
    channel: 'Beyond Fireship',
    views: '217K',
    publishedAt: '1 month ago',
    thumbnail: thumbnail3,
    icon: icon3,
  },
  {
    title: 'If ChatGPT was ASIAN',
    channel: 'Steven He',
    views: '2.2M',
    publishedAt: '7 days ago',
    thumbnail: thumbnail4,
    icon: icon4,
  },
  {
    title: 'We Made Slightly Offensive Bowling Animations, Again',
    channel: 'Corridor Crew',
    views: '371K',
    publishedAt: '1 day ago',
    thumbnail: thumbnail5,
    icon: icon5,
  },
  {
    title: "I'm back in videos, and I'm gonna fly like Iron Man.",
    channel: 'Hacksmith Industries',
    views: '772K',
    publishedAt: '5 days ago',
    thumbnail: thumbnail6,
    icon: icon6,
  },
]
