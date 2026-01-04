import { test, expect } from '@playwright/test';

// ================== CONSTANTS ==================
const BaseUrl = 'https://api.restful-api.dev';
const ObjectPath = '/objects';
const FullUrlWithObjectPath = BaseUrl + ObjectPath;

// ================== SHARED VARIABLES ==================
let objectID: string;
let FullPathWithId: string;

// ================== TESTS ==================
test.describe.serial('CRUD API FLOW', () => {

  test('GET API', async ({ request }) => {
    const response = await request.get(FullUrlWithObjectPath);
    expect(response.status()).toBe(200);
  });

  test('POST API', async ({ request }) => {
    const payload = {
      name: 'Apple MacBook Pro 16',
      data: {
        year: 2019,
        price: 1849.99,
        'CPU model': 'Intel Core i9',
        'Hard disk size': '1 TB'
      }
    };

    const response = await request.post(FullUrlWithObjectPath, {
      data: payload
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('POST RESPONSE:', body);

    // 👇 أهم سطر
    objectID = body.id;
    expect(objectID).toBeTruthy();

    FullPathWithId = `${FullUrlWithObjectPath}/${objectID}`;
    console.log('FULL PATH:', FullPathWithId);
  });

  test('PUT API', async ({ request }) => {
    expect(FullPathWithId).toBeTruthy();

    const payload = {
      name: 'Apple MacBook Pro UPDATED'
    };

    const response = await request.put(FullPathWithId, {
      data: payload
    });

    expect(response.status()).toBe(200);
  });

  test('PATCH API', async ({ request }) => {
    expect(FullPathWithId).toBeTruthy();

    const payload = {
      name: 'Apple MacBook Pro PATCHED'
    };

    const response = await request.patch(FullPathWithId, {
      data: payload
    });

    expect(response.status()).toBe(200);
  });

  test('DELETE API', async ({ request }) => {
    expect(FullPathWithId).toBeTruthy();

    const response = await request.delete(FullPathWithId);
    expect([200, 204]).toContain(response.status());
  });

});
