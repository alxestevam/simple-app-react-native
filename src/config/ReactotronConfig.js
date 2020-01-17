/* global __DEV__ */
/* eslint import/no-extraneous-dependencies: 0 */

if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default; // eslint-disable-line global-require
  // eslint-disable-next-line no-console
  console.tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
}
