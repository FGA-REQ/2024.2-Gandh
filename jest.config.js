module.exports = {
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  collectCoverage: true, // Ativa a cobertura
  collectCoverageFrom: [
    'src/**/*.ts', // Inclui todos os arquivos TypeScript dentro de src
    '!src/main.ts', // Exemplo: exclui main.ts da cobertura
    '!src/modules/**', // Exemplo: exclui index.ts da cobertura
    '!src/**/index.ts', // Exclui arquivos index.ts
    '!src/dtos/**', // Exclui arquivos DTOs
  ],
  coverageDirectory: 'coverage', // Define a pasta de saída
  coverageReporters: ['html', 'text', 'lcov'], // Define os formatos de relatório
};
