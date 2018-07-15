const path = require('path');
const fs = require('fs');
const MongodbMemoryServer = require('mongodb-memory-server');

const globalConfigPath = path.join(__dirname, 'globalConfig.json');
const mongoServer = new MongodbMemoryServer.MongoMemoryServer();

module.exports = async function setupMongodb() {
  console.log('配置Jest Setup调用');
  const mongoConfig = {
    mongoDBName: 'jest',
    mongoUri: await mongoServer.getConnectionString(),
  };

  // 将配置写入本地配置文件以供所有测试都能调用的到
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));

  // 设置对mongodb的引用，以便在拆卸期间关闭服务器。
  global.__MONGOD__ = mongoServer;
};
