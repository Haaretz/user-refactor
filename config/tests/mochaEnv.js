require('source-map-support/register');
require("babel-register")({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: /node_modules\/(?!htz.*).*/
});
require('jsdom-global')();
require('node-fetch'); //polyfill (not really) window.fetch

const chai = require('chai'),
  sinonChai = require('sinon-chai'),
  // chaiDirty = require('dirty-chai'), // disabled -see below
  chaiAsPromised = require("chai-as-promised");
global.expect = chai.expect;
global.sinon = require('sinon');
chai.use(sinonChai);
chai.use(chaiAsPromised);
// chai.use(chaiDirty); //should come last // no typescript definition and I don't feel like writing one today
