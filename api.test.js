/* global test expect describe it  */

const { API_INSPECTOR_GET_COURSES } = require('./api');

// for async object

test('the data is peanut butter', async () => {
  const data = await API_INSPECTOR_GET_COURSES();
  // eslint-disable-next-line no-console
  // console.log(data);
  // eslint-disable-next-line no-console
  // console.log(data.data.results);
  expect(data.status).toBe(200);
});

describe('group async test', () => {
  it('status 200', async () => {
    try {
      const data = await API_INSPECTOR_GET_COURSES();
      expect(data.status).toBe(200);
      expect(Array.isArray(data.data.results)).toBe(true);
      if (data.data.results.length > 0) {
        expect(data.data.results[0]).toHaveProperty('gender');
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      // console.log(e);
    }
  });
});

const dummyDemoRequest = [{ name: 'Peter' }, { name: 'David' }, { name: 'Mary' }];

describe('looping async api test', () => {
  it.each(dummyDemoRequest)('status 200', async () => {
    try {
      const data = await API_INSPECTOR_GET_COURSES();
      expect(data.status).toBe(200);
      expect(Array.isArray(data.data.results)).toBe(true);
      if (data.data.results.length > 0) {
        expect(data.data.results[0]).toHaveProperty('gender');
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      // console.log(e);
    }
  });
});
