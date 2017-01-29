import chaiAsPromised from 'chai-as-promised';
// import dirtyChai from 'dirty-chai';
import 'babel-polyfill';

chai.use(chaiAsPromised);
// chai.use(dirtyChai); //disabled due to no typings

const testsContext = require.context('../../src', true, /\.spec.ts$/);
testsContext.keys().forEach(function (path) {
  try {
    testsContext(path);
  }
  catch (err) {
    console.error('[ERROR] WITH SPEC FILE: ', path);  // eslint-disable-line
    console.error(err);  // eslint-disable-line
  }
});
