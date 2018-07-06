it('检查匹配器并测试通过', () => {
  const user = {
    createAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'Durban',
  };

  expect(user).toMatchSnapshot({
    createAt: expect.any(Date),
    id: expect.any(Number),
  });
});
