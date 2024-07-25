// @ts-check
 
export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }]
    }
  }
  return nextConfig
}