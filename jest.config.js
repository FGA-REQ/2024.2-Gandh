module.exports = {
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    testEnvironment: 'node',
  };