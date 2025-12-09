import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SV Water Solutions',
    short_name: 'SV Water',
    description: 'Leading provider of water purification solutions. RO purifiers, UV systems, water softeners, and comprehensive maintenance services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F8F8',
    theme_color: '#00C8D7',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
