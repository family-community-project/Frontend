// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // `next export` 시 out/ 폴더 생성
  reactStrictMode: true,
  trailingSlash: true, // S3 업로드 시 
}

export default nextConfig;
