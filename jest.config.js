module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
  testTimeout: 60000,
  transform: {
    '^.+\\.ts?$': 'ts-jest', //typescript转换
  }
}