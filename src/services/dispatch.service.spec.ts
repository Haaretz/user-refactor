import {DispatchService} from "./dispatch.service";
import {expect} from "chai";
let fetchMock = require("fetch-mock"); // this doesn't work well with import syntax

describe.only("Dispatch service", function () {
  describe("dispatch method", () => {
    let dispatchService;
    beforeEach(() => {
      fetchMock.post("*", {success: true});
      dispatchService = new DispatchService(fetch); // mock is now on global fetch, no need to pass it here
    });
    afterEach(() => {
      fetchMock.restore();
    });

    it("sends request to first argument url", () => {
      dispatchService.dispatch('test');
      expect(fetchMock.called()).to.be.true;
      expect(fetchMock.lastUrl()).to.eq('test');
    });
    it("sends POST with data params");
    it("sends GET request with params");
    it("returns a response object in a promise");
  });

});
