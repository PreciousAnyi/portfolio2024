import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
};

export default withSentryConfig(
  nextConfig,
  {
    // Sentry Webpack Plugin options
    silent: true,
    org: 'javascript-mastery',
    project: 'javascript-nextjs',
  },
  {
    // Sentry SDK options
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
