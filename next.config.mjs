/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'media.istockphoto.com', // previously added domain
            'images.unsplash.com',   // add this line
          ],
      },
};

export default nextConfig;
