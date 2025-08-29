import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/om',
        destination: '/about/tjonnasdelikatesser',
        permanent: true,
      },
      {
        source: '/contact-3',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services-5',
        destination: '/menu?menu=catering',
        permanent: true,
      },
      {
        source: '/s-projects-basic',
        destination: 'about/norvald',
        permanent: true,
      },
      {
        source: '/s-projects-basic-1',
        destination: 'about/norma',
        permanent: true,
      },
      
    ]
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
