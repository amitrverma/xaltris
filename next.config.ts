import withMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  output: 'standalone', // literal string, not general string
}

export default withMDX()(nextConfig)
