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
      // console.log('moretime -> init time = ', time1);
      if (time1 === 1) {
        citys.push('natasha1');
        time1 += 1;
      } else if (time1 === 2) {
        citys.push('natasha2');
        time1 += 1;
      }
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
    setTimeout(() => {
      // console.log('moretime -> clear time = ', time2);
      time2 += 1;
      citys = [];
      promise = resolve(citys);
    }, 1000);
  } catch (err) {
    return reject(err);
  }

  return promise;
});

beforeEach(() => initCityDatabase());

afterEach(() => clearCityDatabase());

test('The city database has natasha1', () => {
  expect(isCity('natasha1')).toBeTruthy();
});

test('The city database has natasha2', () => {
  expect(isCity('natasha2')).toBeTruthy();
});
