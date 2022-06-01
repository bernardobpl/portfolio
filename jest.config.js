module.exports = {
  testPathIgnorePatterns: ['/node_modules/', './next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<roodDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
}
