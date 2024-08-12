/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {

    },
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com",
            "images.remotePatterns"

        ]
    }
};

export default nextConfig;