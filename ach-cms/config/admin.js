module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cb8aa9cea308a7fcee8d03c768db47de'),
  },
});
