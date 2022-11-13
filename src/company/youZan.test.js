// import React from 'react';
// import { cleanup } from '@testing-library/react';
import { keyToCamel } from './keyToCamel';
import { timeRange } from './timeRange';

describe('company', () => {
  it(`keyToCamel`, () => {
    const testData = {
      a_bbb: 123,
      a_g: [1, 2, 3, 4],
      a_d: {
        s: 2,
        s_d: 3,
      },
      a_f: [
        1,
        2,
        3,
        {
          a_g: 5,
        },
      ],
      a_d_s: 1,
    };

    expect(keyToCamel(testData)).toEqual({
      aBbb: 123,
      aG: [1, 2, 3, 4],
      aD: { s: 2, sD: 3 },
      aF: [1, 2, 3, { aG: 5 }],
      aDS: 1,
    });
  });
  it(`timeRange`, () => {
    expect(
      timeRange('110010000000000000000000000000000000000000000011'),
    ).toEqual(['00:00~01:00', '02:00~02:30']);
  });
});
