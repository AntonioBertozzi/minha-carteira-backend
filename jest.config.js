module.exports = {
  coverageDirectory: 'coverage',
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/modules/*/service/*.js'],
};
