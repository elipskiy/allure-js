import { Status } from "allure-js-commons";
import { suite, test } from "mocha-typescript";
import { MochaAllureInterface } from "../../../src/MochaAllureInterface";

declare const allure: MochaAllureInterface;

@suite
class GlobalInfo {
  @test
  shouldWriteEnvironment() {
    allure.writeEnvironmentInfo({
      Browser: "chrome",
      GitHub: "https://github.com/sskorol",
      Author: "Sergey Korol"
    });
  }

  @test
  shouldWriteCategories() {
    allure.writeCategoriesDefinitions([
      {
        name: "Sad tests",
        messageRegex: /.*Sad.*/,
        matchedStatuses: [Status.FAILED]
      },
      {
        name: "Infrastructure problems",
        messageRegex: ".*Error.*",
        matchedStatuses: [Status.BROKEN]
      }
    ]);
  }
}
