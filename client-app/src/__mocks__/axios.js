'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          name: 'Value 101'
        },
        {
          id: 1,
          name: 'Value 102'
        }
      ]
    });
  }
};