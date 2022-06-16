// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehicles = await request('/api/vehicles.json');

  const promises = [];
  vehicles.forEach((vehicle) => {
    const myPromise = new Promise((resolve) => {
      request(vehicle.apiUrl).then((details) => {
        if (details !== null && details.price !== undefined && details.price !== '') {
          const item = {
            id: vehicle.id,
            modelYear: vehicle.modelYear,
            media: vehicle.media,
            description: details.description,
            price: details.price,
            meta: details.meta
          };
          resolve(item);
        } else {
          resolve();
        }
      });
    });
    promises.push(myPromise);
  });

  const results = await Promise.all(promises);
  const arr = [];
  results.forEach((result) => {
    if (result) {
      arr.push(result);
    }
  });

  return arr;
}
