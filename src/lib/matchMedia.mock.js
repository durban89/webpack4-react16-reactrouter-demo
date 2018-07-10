window.matchMedia = jest.fn().mockImplementation((query) => {
  const obj = {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };

  return obj;
});
