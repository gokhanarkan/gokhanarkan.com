module.exports = {
  async redirects() {
    return [
      {
        source: "/hackernews-api",
        destination: "/blog/hackernews-api",
        permanent: true,
      },
      {
        source: "/tiny-contact-api",
        destination: "/blog/tiny-contact-api",
        permanent: true,
      },
    ];
  },
};
