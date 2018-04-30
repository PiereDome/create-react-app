import 'jest-styled-components';
import 'jest-mock-console/dist/setupTestFramework.js';

afterEach(() => {
  document.testCookie = false;
});
