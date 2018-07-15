module.exports = async function tearDownMongodb() {
  console.log('配置Jest TearDown调用');
  await global.__MONGOD__.stop();
};
