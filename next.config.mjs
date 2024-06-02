/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',

  // experimental: {
  //   appDir: true,
  //   //esmExternals: false,

  // },

  webpack: (config, { isServer }) => {
    // Add the file-loader configuration for handling binary files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|pdf|png|jpg|jpeg|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: '/[name].[hash].[ext]',
          },
        },
      ],
    });

    // For server-side rendering of canvas, add the canvas package configuration
    if (isServer) {
      const canvasNodeLoader = {
        test: /canvas.node$/,
        loader: 'file-loader',
        options: {
          name: '/[name].[hash].[ext]',
        },
      };
      config.module.rules.push(canvasNodeLoader);
    }

    return config;
  },
}

export default nextConfig
