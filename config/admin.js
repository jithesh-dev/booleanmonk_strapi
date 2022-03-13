module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a5ede800f883de934eb01a43c5df54a'),
  },
});
