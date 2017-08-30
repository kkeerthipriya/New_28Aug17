$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/GiftCard.feature");
formatter.feature({
  "line": 3,
  "name": "Home Page Login",
  "description": "User should login to forever new",
  "id": "home-page-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login",
  "description": "",
  "id": "home-page-login;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am registered user",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I open Forever login page and enter login details \u0027\u003cUserName\u003e\u0027 and \u0027\u003cPasswd\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should login to the forever new",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "home-page-login;login;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Passwd"
      ],
      "line": 11,
      "id": "home-page-login;login;;1"
    },
    {
      "cells": [
        "k.keerthipriya@gmail.com",
        "kiran143"
      ],
      "line": 12,
      "id": "home-page-login;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 594061,
  "error_message": "java.lang.NullPointerException\r\n\tat com.forever.testautomation.hooks.BrowserHooks.openBrowser(BrowserHooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:55)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:47)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Login",
  "description": "",
  "id": "home-page-login;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am registered user",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I open Forever login page and enter login details \u0027k.keerthipriya@gmail.com\u0027 and \u0027kiran143\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should login to the forever new",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.i_am_registered_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "k.keerthipriya@gmail.com",
      "offset": 51
    },
    {
      "val": "kiran143",
      "offset": 82
    }
  ],
  "location": "LoginDefinition.i_enter_the_login_details_as_k_keerthipriya_gmail_com_and_kiran(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginDefinition.i_should_login_to_the_forever_new_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 40449,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "GiftCard",
  "description": "",
  "id": "home-page-login;giftcard",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I open the Forever New home page \u0027\u003cUname\u003e\u0027 and \u0027\u003cPwd\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I open buy gift cards page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "give all the details \u0027\u003cGiftCardValue\u003e\u0027 and \u0027\u003cQTY\u003e\u0027 and \u0027\u003cSenName\u003e\u0027 and \u0027\u003cSenEmail\u003e\u0027 and \u0027\u003cRcvName\u003e\u0027 and \u0027\u003cRcvEmail\u003e\u0027 and \u0027\u003cMsg\u003e\u0027 and \u0027\u003cCreditCardNo\u003e\u0027 and \u0027\u003cExpMonth\u003e\u0027 and \u0027\u003cExpYear\u003e\u0027 and \u0027\u003cCVV\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should login to the forever new website",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "home-page-login;giftcard;",
  "rows": [
    {
      "cells": [
        "Uname",
        "Pwd",
        "GiftCardValue",
        "QTY",
        "SenName",
        "SenEmail",
        "RcvName",
        "RcvEmail",
        "Msg",
        "CreditCardNo",
        "ExpMonth",
        "ExpYear",
        "CVV"
      ],
      "line": 20,
      "id": "home-page-login;giftcard;;1"
    },
    {
      "cells": [
        "k.keerthipriya@gmail.com",
        "kiran143",
        "Gift Card CA +$20.00",
        "1",
        "Keerthi",
        "k.keerthipriya@gmail.com",
        "Kiran",
        "kiroooos@gmail.com",
        "Happy weekend",
        "4444333322221111",
        "11",
        "20",
        "123"
      ],
      "line": 21,
      "id": "home-page-login;giftcard;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 162099,
  "error_message": "java.lang.NullPointerException\r\n\tat com.forever.testautomation.hooks.BrowserHooks.openBrowser(BrowserHooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:55)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:47)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "GiftCard",
  "description": "",
  "id": "home-page-login;giftcard;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I open the Forever New home page \u0027k.keerthipriya@gmail.com\u0027 and \u0027kiran143\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I open buy gift cards page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "give all the details \u0027Gift Card CA +$20.00\u0027 and \u00271\u0027 and \u0027Keerthi\u0027 and \u0027k.keerthipriya@gmail.com\u0027 and \u0027Kiran\u0027 and \u0027kiroooos@gmail.com\u0027 and \u0027Happy weekend\u0027 and \u00274444333322221111\u0027 and \u002711\u0027 and \u002720\u0027 and \u0027123\u0027",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should login to the forever new website",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "k.keerthipriya@gmail.com",
      "offset": 34
    },
    {
      "val": "kiran143",
      "offset": 65
    }
  ],
  "location": "GiftCardDefn.i_open_the_Forever_Page(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCardDefn.i_open_gift_card_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card CA +$20.00",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 49
    },
    {
      "val": "Keerthi",
      "offset": 57
    },
    {
      "val": "k.keerthipriya@gmail.com",
      "offset": 71
    },
    {
      "val": "Kiran",
      "offset": 102
    },
    {
      "val": "kiroooos@gmail.com",
      "offset": 114
    },
    {
      "val": "Happy weekend",
      "offset": 139
    },
    {
      "val": "4444333322221111",
      "offset": 159
    },
    {
      "val": "11",
      "offset": 182
    },
    {
      "val": "20",
      "offset": 191
    },
    {
      "val": "123",
      "offset": 200
    }
  ],
  "location": "GiftCardDefn.i_give_all_giftCard_details(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCardDefn.i_should_not_be_able_to_go_to_next_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29582,
  "status": "passed"
});
