let citys = [];
let time1 = 1;
let time2 = 1;
const isCity = (city) => {
  if (citys.indexOf(city) > -1) {
    return true;
  }
  return false;
};

const initCityDatabase = () => new Promise((resolve, reject) => {
  let promise;

  try {
    setTimeout(() => {
      // console.log('onetime -> init time = ', time1);
      time1 += 1;
      citys.push('natasha1');
      citys.push('natasha2');
      promise = resolve(citys);
    }, 1000);
  } catch (err) {
    return reject(err);
  }

  return promise;
});

const clearCityDatabase = () => new Promise((resolve, reject) => {
  let promise;
  try {
    // console.log('onetime -> clear time = ', time2);
    time2 += 1;
    setTimeout(() => {
      citys = [];
      promise = resolve(citys);
    }, 1000);
  } catch (err) {
    return reject(err);
  }

  return promise;
});

beforeAll(() => initCityDatabase());

afterAll(() => clearCityDatabase());

test('The city database has natasha1', () => {
  expect(isCity('natasha1')).toBeTruthy();
});

test('The city database has natasha2', () => {
  expect(isCity('natasha2')).toBeTruthy();
});
