const citys = [];
const foods = [];
let time1 = 1;
let time2 = 1;
const isCity = (city) => {
  if (citys.indexOf(city) > -1) {
    return true;
  }
  return false;
};

const isCityAndFood = (cityAndFood) => {
  let hasCity = false;
  let hasFood = false;

  if (citys.indexOf(cityAndFood.city) > -1) {
    hasCity = true;
  }

  if (foods.indexOf(cityAndFood.food) > -1) {
    hasFood = true;
  }

  if (hasCity && hasFood) {
    return true;
  }

  return false;
};
const initCityDatabase = () => new Promise((resolve, reject) => {
  let promise;

  try {
    setTimeout(() => {
      // console.log('initCityDatabase time = ', time1);
      if (time1 === 1) {
        citys.push('Shanghai');
      } else if (time1 === 2) {
        citys.push('Chifeng');
      }
      time1 += 1;
      promise = resolve(citys);
    }, 1000);
  } catch (err) {
    return reject(err);
  }

  return promise;
});

const initFoodDatabase = () => new Promise((resolve, reject) => {
  let promise;

  try {
    setTimeout(() => {
      // console.log('initFoodDatabase time = ', time2);
      if (time2 === 1) {
        foods.push('Banana');
      } else if (time2 === 2) {
        foods.push('Apple');
      }
      time2 += 1;
      promise = resolve(foods);
    }, 1000);
  } catch (err) {
    return reject(err);
  }

  return promise;
});

beforeEach(() => initCityDatabase());

test('city database has Shanghai', () => {
  expect(isCity('Shanghai')).toBeTruthy();
});

test('city database has Chifeng', () => {
  expect(isCity('Chifeng')).toBeTruthy();
});

describe('matching cities to foods', () => {
  beforeEach(() => initFoodDatabase());

  test('database has Shanghai and Banana', () => {
    expect(isCityAndFood({
      city: 'Shanghai',
      food: 'Banana',
    })).toBe(true);
  });

  test('database has Chifeng and Apple', () => {
    expect(isCityAndFood({
      city: 'Chifeng',
      food: 'Apple',
    })).toBe(true);
  });
});
