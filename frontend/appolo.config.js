module.exports = {
  client: {
    service: {
      name: 'calendar',
      // URL to the GraphQL API
      url: 'http://localhost:8888/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts'],
  },
}
