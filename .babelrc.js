const path = require('path');

module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: true, // or 'css'
      },
    ],
  ],
};
