module.exports = {
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globalSetup: './jest.mongodb.setup.js',
  globalTeardown: './jest.mongodb.teardown.js',
  testEnvironment: './jest.mongodb.environment.js',
};

