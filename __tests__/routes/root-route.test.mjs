import build from '../../src/app.mjs';

let app;

describe('Root route', () => {
  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });

  it('should return statusCode 200 when navigating to /', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ hello: 'world!' });
  });
});
