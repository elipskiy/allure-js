import { Status } from "allure-js-commons";
import { expect } from "chai";
import { suite } from "mocha-typescript";
import { findParameter, runTests } from "../utils";

@suite
class ParameterSuite {
  @test
  async shouldHaveParameter() {
    const writerStub = await runTests("parameter");
    const test = writerStub.getTestByName("shouldAssignParameter");

    expect(test.status).eq(Status.PASSED);
    expect(findParameter(test, "key").value).eq("value");
  }
}
